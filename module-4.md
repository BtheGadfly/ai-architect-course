# Expedition 4: Building the "Light" Automated Workflow

**The Goal:** Design a multi-step flow that bridges enterprise systems.

---

## From Blueprint to Bridge

The capstone of the Architect’s journey is the **Service Recovery Agent**. In the old "Bunker" model, a customer complaint is a disaster that requires a human to manually hunt for data across three different silos. In the Agentic era, we build a bridge that handles the research, the logic, and the draft before a human even opens their laptop.

**The Shift:** This is about **System Instructions**—the "Code of the Future." You aren't telling the AI *what* to say; you are telling it *how* to think and which tools to grasp. You are connecting the "Memory" (Infrastructure) to the "Action" (Application).

---

## The Sandbox: The "Service Recovery" Engine

**Outcome:** Design a multi-step flow that uses an AI agent to bridge two separate enterprise systems.

- **The Challenge (The 1-Star Fire):** A high-value customer just left a scathing 1-star review. In the "City of Bunkers," this sits in a support queue for 24 hours. Your task is to build the **Nervous System** that reacts instantly.
- **The Task:** Map the **Logic Loop** for the Recovery Agent:
  - **Step 1 (Perception):** The Agent detects "negative sentiment" in a new support ticket.
  - **Step 2 (Tool Use):** The Agent uses its "Hands" to search the CRM *(Is this a VIP? How much have they spent? What was their last interaction?)*.
  - **Step 3 (The Brain):** The Agent applies the **Architect’s Logic**:
    - *If Spend > $500:* Draft a personalized apology + a $50 credit.
    - *If Spend < $500:* Draft a standard apology + a troubleshooting guide.
  - **Step 4 (Action):** The Agent posts the draft and the "Customer Dossier" into a private Slack channel for a human to hit "Send."
- **The Artifact (System Instructions):** Write the actual **System Prompt** for this Agent.

::: code-group
```text [System Instructions Template]
# PERSONA
You are a precise, empathetic Recovery Specialist.

# CONSTRAINTS
- Never promise a refund without checking the 'Lifetime Spend' field first.
- Maintain a conciliatory yet firm tone.

# SUCCESS STATE
Your output must be a two-part briefing:
1. Internal Summary (Customer tier, lifetime spend, issue summary).
2. External Draft (Apology message + resolution offer).
