# Expedition 2: The Anatomy of an AI Agent

**The Goal:** Deconstruct complex workflows into executable tasks.

---

## From Static Chat to the "Agent Loop"

If a chatbot is a digital encyclopedia, an AI Agent is a digital employee. The difference isn't just in the intelligence; it's in the autonomy. While traditional software waits for you to click a button, an Agent is designed to "loop" through a problem until it’s solved. It doesn't just talk about work; it executes it across the "Bunkers" we identified in the blueprint from Expedition 1.

**The Shift:** To build an Agent, you must stop thinking in terms of "prompts" and start thinking in terms of Capabilities. You are no longer writing a script; you are defining a nervous system that senses, thinks, and acts.

---

## The Agentic Lifecycle: The Technical Specs

To architect a worker, you must understand its core systems:

| Component | Technical Term | The Function |
| :--- | :--- | :--- |
| **1. The Sensory Input** | **Perception** | How the agent "sees." This could be a new email, a Slack mention, or a scheduled trigger in a database. |
| **2. The Cognitive Core** | **Brain (LLM)** | The reasoning engine. It evaluates the input against the **System Instructions** to decide the next best step. |
| **3. The Tool Belt** | **API / Tool Use** | The agent’s hands. This is the ability to "call" other software (e.g., searching a PDF via **RAG**, checking a CRM, or sending a calendar invite). |
| **4. The Output** | **Action** | The final move. Writing the data, sending the message, or triggering the next agent in the chain. |

---

## The Sandbox: The "Onboarding Ghost"

**Outcome:** Deconstruct the "First Day Frustration" into a streamlined, Agentic workflow.

- **The Challenge (The Onboarding Breakdown):** New hire onboarding is the ultimate "Bunker" problem. HR has the contract, IT has the laptop, and the Manager has the welcome plan, but because they live in separate silos, the new hire often sits in limbo for three days waiting for a login.
- **The Task:** You are the Architect. Your job is to replace the manual "messengers" with an Onboarding Agent that lives across all three bunkers.
- **The Blueprint:** Define its three core functions:
  - **The Trigger (Perception):** How does the Agent "wake up"? *(Example: The Agent "hears" a digital signature on a DocuSign contract).*
  - **The Logic (The Brain):** What decisions does it make without asking you? *(Example: If the role is "Marketing," the Agent decides they need Canva; if it's "Finance," it grants Payroll access).*
  - **The Action (The Hands):** What systems does it actually "touch"? *(Example: The Agent creates the Slack account and orders the laptop via a vendor's API).*
- **The Artifact (The Flow of First Day):** Create a simple Logic Flowchart showing the Agent's path from **"Contract Signed"** to **"Ready to Work."**

::: warning 💡 Architect's Note
An Agent is only as good as its "hands." If you don't give your Agent access to the software APIs, it’s just a "Ghost"—it can see that the new hire is waiting, but it can't actually open the door for them.
:::

---

## The Commons (Sharing & Feedback)

- **The Mission:** Share your "Onboarding Ghost" Logic Flowchart in the **#Design-Lab** channel. Compare your flowchart to the provided professional benchmark. Did you miss a specific API "hand" or a crucial "Perception" trigger?
- **The Plus/Delta Exchange:**
  - **Plus (+):** Identify a "Wow" moment. Did they automate a task that usually takes a week? *(Example: "I love that your Agent automatically sends a 'Welcome Pack' to their home the moment the background check clears.")*
  - **Delta (Δ):** Identify the "Safety Valve." Since the Agent has the power to spend money (ordering hardware), where should a **Human-in-the-Loop** checkpoint be added? *(Example: "Where does a manager click 'Approve' before the Agent spends $2,000 on a laptop?")*

---

## The Explorer's Compass (AI Prompts for Research)

::: info ⏱️ Tip
Timebox interacting with chatbots/research to 15 minutes.
:::

::: tip 🧭 The "Anatomy" Prompt (For Novices)
"I am learning about the **Agent Loop** (Perception, Brain, Tool Use, Action). Use the analogy of a **Smart Thermostat** to explain this cycle. How does it 'perceive' the room, 'reason' about the temperature setting, and use its 'tools' to change the environment? Most importantly, explain why a 'Context Window' is like the thermostat's short-term memory."
:::

::: danger 🧪 The "Latency" Prompt (For Experts)
"Evaluate the **'Reasoning' vs. 'Action'** latency in an autonomous agent loop. When using **RAG** for enterprise data retrieval, how does the size of the retrieved 'chunks' affect the LLM's ability to maintain a coherent state? Discuss the risks of an Agent entering a **'hallucination loop'** if its Tool Use (API call) returns an unexpected error format. How do you architect a 'circuit breaker' for this?"
:::
