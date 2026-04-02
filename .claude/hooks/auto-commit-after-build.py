#!/usr/bin/env python3
import json
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path


def run_git(args, cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args],
        cwd=str(cwd),
        capture_output=True,
        text=True,
        encoding="utf-8",
    )


def main() -> int:
    try:
        payload = json.load(sys.stdin)
    except json.JSONDecodeError:
        return 0

    tool_input = payload.get("tool_input", {})
    command = (tool_input.get("command") or "").strip()
    if command != "npm run build":
        return 0

    repo_root = Path(__file__).resolve().parents[2]

    add_result = run_git(["add", "README.md", "CLAUDE.md", "CONTRIBUTING.md", "src", "public", ".github", "package.json", "astro.config.mjs"], repo_root)
    if add_result.returncode != 0:
        sys.stdout.write(json.dumps({
            "systemMessage": f"auto-commit: git add failed\n{add_result.stderr.strip()}"
        }, ensure_ascii=False))
        return 0

    diff_result = run_git(["diff", "--cached", "--quiet"], repo_root)
    if diff_result.returncode == 0:
        sys.stdout.write(json.dumps({
            "systemMessage": "auto-commit: build succeeded, but nothing is staged to commit"
        }, ensure_ascii=False))
        return 0

    if diff_result.returncode not in (0, 1):
        sys.stdout.write(json.dumps({
            "systemMessage": f"auto-commit: staged diff check failed\n{diff_result.stderr.strip()}"
        }, ensure_ascii=False))
        return 0

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = f"chore: auto commit after successful build ({timestamp})"
    commit_result = run_git(["commit", "-m", message], repo_root)
    if commit_result.returncode != 0:
        sys.stdout.write(json.dumps({
            "systemMessage": f"auto-commit: git commit failed\n{commit_result.stderr.strip() or commit_result.stdout.strip()}"
        }, ensure_ascii=False))
        return 0

    sys.stdout.write(json.dumps({
        "systemMessage": f"auto-commit: build succeeded, ran git add + git commit\n{message}"
    }, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
