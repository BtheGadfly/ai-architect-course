# Expedition 4: Building the "Light" Automated Workflow

**Theme:** The capstone — Connecting the dots[cite: 1].

**Outcome:** Design a multi-step flow using an AI agent to bridge two separate enterprise systems[cite: 1].

---

## From Blueprint to Bridge

The capstone project is the **Service Recovery Agent**[cite: 1]. Instead of customer complaints sitting in a queue for 24 hours while humans search silos for data, we build a bridge that handles research, logic, and drafting automatically[cite: 1].

**The Shift:** Master **System Instructions**—the "Code of the Future." You aren't telling the AI *what* to say; you are telling it *how* to think and which tools to grasp[cite: 1].

---

## The Sandbox: The "Service Recovery" Engine

**Outcome:** Design a multi-step flow that bridges two separate enterprise systems[cite: 1].

* **The Task:** Map the **Logic Loop** for the Recovery Agent[cite: 1]:
  * **Step 1 (Perception):** Detect "negative sentiment" in a new support ticket[cite: 1].
  * **Step 2 (Tool Use):** Search the CRM via APIs (e.g., *Is this a VIP? What is their spend/history?*)[cite: 1].
  * **Step 3 (The Brain):** Apply logic[cite: 1]:
    * *If Spend > $500:* Draft personalized apology + $50 credit[cite: 1].
    * *If Spend < $500:* Draft standard apology + troubleshooting guide[cite: 1].
  * **Step 4 (Action):** Post the draft and "Customer Dossier" into a private Slack channel for human approval[cite: 1].
* **The Artifact:** Write the actual **System Instructions** (System Prompt)[cite: 1].

::: code-group
```text [System Instructions Template]
# PERSONA
You are a precise, empathetic Recovery Specialist[cite: 1].

# CONSTRAINTS
- Never promise a refund without checking the 'Lifetime Spend' field first[cite: 1].
- Maintain a conciliatory yet firm tone[cite: 1].

# SUCCESS STATE
Your output must be a two-part briefing:
1. Internal Summary (Customer tier, lifetime spend, issue summary).
2. External Draft (Apology message + resolution offer).
