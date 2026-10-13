# Expedition 3: Strategy & Requirement Mapping

**The Goal:** Learn to veto bad AI ideas and prioritize high-impact automation.

---

## From "Can We?" to "Should We?"

In the "Bunker" model, software is forced upon users in massive, rigid blocks. In the Agentic era, the risk is the opposite: The "Do-Everything" Bot. This is the hallucination of stakeholders who believe AI is a magic wand rather than a structural component. Your job as the Architect is to act as a Solution Consultant, mapping the high-traffic routes of your enterprise and deciding where to build a bridge and where to stick to a simple path.

**The Shift:** You are moving from a Technical Builder to a Strategic Gatekeeper. You must learn the "Forward Deployed" mindset: matching the complexity of the AI solution to the actual weight of the problem.

---

## The Sandbox: The "Fault Line" Map

**Outcome:** Identify where a "Do-Everything" Bot will cause a systemic collapse and design a "Load-Bearing" alternative.

- **The Challenge (The "Everything Bot" Stress-Test):** A high-level stakeholder demands a bot that joins meetings, records them, assigns tasks, updates the budget, and handles HR performance pings. In a "City of Bunkers," this is like trying to run a single high-voltage wire through five separate buildings without a surge protector.
- **The Task:** Perform a **Structural Audit**. Map the "Fault Lines" where this bot will fail or cause a disaster using a Stoplight Diagram.
- **The Blueprint:** Identify three "Failure Points" using these categories:
  - **The Context Collapse (Infrastructure):** Where will the AI get confused by "Bunker" jargon? *(e.g., The Sales team uses 'Close' to mean a deal; the Janitorial Agent uses 'Close' to mean a door).*
  - **The Hallucination Leak (Orchestration):** Where could the Agent "hallucinate" an action it shouldn't take? *(e.g., It mistakes a joke about 'firing someone' in a meeting for a direct command to revoke their Slack access).*
  - **The Permission Breach (Application):** Which "Bunker" shouldn't this Agent have the keys to? *(e.g., The Agent has access to public meeting notes and the private Payroll database).*
- **The Artifact (The "Fault Line" Map):** Create a visual **"Stoplight Diagram"**:
  - **Green:** Tasks that are "High-Impact/High-Feasibility" *(e.g., Summarizing and assigning tasks)*.
  - **Yellow:** Tasks that require a **Human-in-the-Loop** checkpoint *(e.g., Updating the budget)*.
  - **Red:** The "Vetoed" tasks that are too dangerous or complex to automate right now *(e.g., HR performance actions)*.

::: warning 💡 Architect's Note
Your goal isn't to say "No." It’s to show the stakeholder exactly where the building will collapse if they don't install the right supports.
:::

---

## The Commons (Sharing & Feedback)

- **The Mission:** Post a photo or screenshot of your **"Stoplight Diagram"** in the **#Strategy-Room** channel. Explain to a peer why "Updating the Budget" might be a "Yellow" (Human-in-the-Loop) task rather than a "Green" one. Check your "Red" vetoes against the Senior Architect’s list. Did you identify the same security and context collapse risks?
- **The Plus/Delta Exchange:**
  - **Plus (+):** Look at a peer’s **Red** items. Did they identify a security risk you missed? *(Example: "I didn't think about the Context Collapse issue between Marketing and Engineering—great catch!")*
  - **Delta (Δ):** Challenge one of their **Green** items. *(Example: "You have 'Updating the Budget' as Green, but if the Agent misreads a currency symbol, that's a burst pipe. Should that be Yellow?")*

---

## The Explorer's Compass (AI Prompts for Research)

::: info ⏱️ Tip
Timebox interacting with chatbots/research to 15 minutes.
:::

::: tip 🧭 The "Feasibility" Prompt (For Novices)
"I am learning how to prioritize AI projects using the Impact vs. Feasibility Matrix. Explain this matrix using the analogy of Urban Planning. Why is a 'High-Impact/Low-Feasibility' project like trying to build a subway system under a historical monument? How do I identify the 'Quick Wins' (High-Impact/High-Feasibility) in a disorganized department?"
:::

::: danger 🧪 The "Governance" Prompt (For Experts)
"Analyze the tension between Agentic Autonomy and Data Governance. When an Agent uses RAG to access sensitive PII (Personally Identifiable Information) across multiple silos, how do we architect a 'Permissions Layer' within the Orchestration tier? Critique the use of 'System Role' prompting versus hard-coded API scopes for preventing unauthorized data exfiltration by an autonomous Agent."
:::
