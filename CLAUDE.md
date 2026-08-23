# Cupel - Claude Code Instructions

## Before writing or reviewing any copy

Read the `cupel-landscape` skill (`.claude/skills/cupel-landscape/`) before writing or reviewing
website or spec copy, or repeating any claim about what Cupel does. It routes to the editorial
dual-audience rules, the dated persona-critique findings, and the roadmap - which is the source of
truth for what is built versus what is aspirational.

The rule that matters: **do not let copy outrun the roadmap.**

<!--
The dispatcher injects the workstream path, the mode, the DoD gate note and the three
complete-task.mjs commands - with the real pageId substituted - into every spawned session
(buildTaskPrompt, workflow/dispatcher-lib.mjs). Restating them here, as this file did, duplicated
the harness with a generic <pageId> placeholder. Auto-approved-operations lists went the same way:
they are settings.json's job, and meaningless under --dangerously-skip-permissions.
-->
