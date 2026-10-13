# Expedition 2: The Anatomy of an AI Agent

**Theme:** Understanding the "Technical Specs" without being a coder[cite: 1].

**Outcome:** Deconstruct a complex workflow into tasks an AI Agent can execute[cite: 1].

---

## From Static Chat to the "Agent Loop"

If a chatbot is a digital encyclopedia, an AI Agent is a digital employee[cite: 1]. The difference isn't just in the intelligence; it's in the autonomy[cite: 1]. While traditional software waits for you to click a button, an Agent is designed to "loop" through a problem until it’s solved[cite: 1]. It executes work across the "Bunkers" identified in Expedition 1[cite: 1].

**The Shift:** Stop thinking in terms of "prompts" and start thinking in terms of capabilities[cite: 1]. You are defining a nervous system that senses, thinks, and acts[cite: 1].

---

## The Agentic Lifecycle: The Technical Specs

| Component | Technical Term | The Function |
| :--- | :--- | :--- |
| **1. The Sensory Input** | **Perception** | How the agent "sees" (e.g., new email, Slack mention, database trigger)[cite: 1]. |
| **2. The Cognitive Core** | **Brain (LLM)** | The reasoning engine evaluating input against **System Instructions**[cite: 1]. |
| **3. The Tool Belt** | **API / Tool Use** | The agent’s hands (e.g., searching a PDF via **RAG**, checking a CRM, calendar invites)[cite: 1]. |
| **4. The Output** | **Action** | Writing data, sending messages, or triggering the next agent in the chain[cite: 1]. |

---

## The Sandbox: The "Onboarding Ghost"

**Outcome:** Deconstruct the "First Day Frustration" into a streamlined, Agentic workflow[cite: 1].

* **The Challenge:** New hire onboarding is the ultimate "Bunker" problem[cite: 1]. HR has the contract, IT has the laptop, and the Manager has the welcome plan, but the new hire sits in limbo for days waiting for access[cite: 1].
* **The Task:** Act as the Architect and map an Onboarding Agent that lives across all three bunkers[cite: 1].
* **The Blueprint:**
  * **The Trigger (Perception):** How does the Agent "wake up" (e.g., signed DocuSign contract)[cite: 1]?
  * **The Logic (The Brain):** What decisions does it make without asking (e.g., Marketing needs Canva, Finance needs Payroll)[cite: 1]?
  * **The Action (The Hands):** What systems does it touch (e.g., creates Slack account, orders laptop via vendor API)[cite: 1]?
* **The Artifact:** Create a Logic Flowchart showing the path from **"Contract Signed"** to **"Ready to Work"**[cite: 1].

::: warning 💡 Architect's Note
An Agent is only as good as its "hands." If you don't give your Agent access to software APIs, it’s just a "Ghost"—it can see that the new hire is waiting, but it can't open the door[cite: 1].
:::

---

## The Commons (Sharing & Feedback)

* **The Mission:** Share your "Onboarding Ghost" Logic Flowchart in the **#Design-Lab** channel[cite: 1].
* **The Plus/Delta Exchange:**
  * **Plus (+):** Identify a "Wow" moment in a peer's blueprint (e.g., automating tasks that usually take a week)[cite: 1].
  * **Delta ($\Delta$):** Identify where a **Human-in-the-Loop** checkpoint should be added (e.g., manager approving laptop purchases before spending money)[cite: 1].

---

## The Explorer's Compass (AI Prompts for Research)

::: tip 🧭 The "Anatomy" Prompt (For Novices)
"I am learning about the **Agent Loop** (Perception, Brain, Tool Use, Action)[cite: 1]. Use the analogy of a **Smart Thermostat** to explain this cycle[cite: 1]. How does it 'perceive' the room, 'reason' about temperature settings, and use its 'tools' to change the environment[cite: 1]? Most importantly, explain why a 'Context Window' is like the thermostat's short-term memory[cite: 1]."
:::

::: danger 🧪 The "Latency" Prompt (For Experts)
"Evaluate the **'Reasoning' vs. 'Action'** latency in an autonomous agent loop[cite: 1]. When using **RAG** for enterprise data retrieval, how does the size of the retrieved 'chunks' affect the LLM's ability to maintain a coherent state[cite: 1]? Discuss the risks of an Agent entering a **'hallucination loop'** if its Tool Use (API call) returns an unexpected error format[cite: 1]. How do you architect a 'circuit breaker' for this[cite: 1]?"
:::
