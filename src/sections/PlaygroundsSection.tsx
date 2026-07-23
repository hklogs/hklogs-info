import { useState } from 'react';
import { Laptop, AlertTriangle, CheckCircle2, RotateCcw, Bug, Play, Copy, Terminal, Loader2 } from 'lucide-react';

interface PlaygroundsSectionProps {
  geminiKey: string;
}

const SQA_TEMPLATES = [
  "Instagram Watch History Deletion System",
  "Real-time Video Streaming Subtitle Parity",
  "Password Reset Expiry Boundary Validation",
  "Multi-currency Cart Discount Engine"
];

export default function PlaygroundsSection({ geminiKey }: PlaygroundsSectionProps) {
  // SQA Lab 01: Instagram Boundary Simulator
  const [igItemCount] = useState(95);
  const [igSelectedItems, setIgSelectedItems] = useState<number[]>([]);
  const [igOutputStatus, setIgOutputStatus] = useState<"idle" | "passed" | "triggered">("idle");
  const [igTab, setIgTab] = useState<"visual" | "bugTicket">("visual");

  // SQA Lab 02: AI Test Generator
  const [testFeature, setTestFeature] = useState("OTP Code Checkout Lockout");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);

  // IG Boundary functions
  const toggleIgItemSelection = (id: number) => {
    let next: number[];
    if (igSelectedItems.includes(id)) {
      next = igSelectedItems.filter(x => x !== id);
    } else {
      next = [...igSelectedItems, id];
    }
    setIgSelectedItems(next);
    evaluateIgStatus(next.length);
  };

  const handleIgBulkSelectAll = () => {
    const list: number[] = [];
    for (let i = 1; i <= 95; i++) {
      list.push(i);
    }
    setIgSelectedItems(list);
    evaluateIgStatus(list.length);
  };

  const triggerDefectBurst = () => {
    const extreme: number[] = [];
    for (let i = 1; i <= 102; i++) {
      extreme.push(i);
    }
    setIgSelectedItems(extreme);
    evaluateIgStatus(102);
  };

  const evaluateIgStatus = (length: number) => {
    if (length >= 100) {
      setIgOutputStatus("triggered");
    } else if (length > 0) {
      setIgOutputStatus("passed");
    } else {
      setIgOutputStatus("idle");
    }
  };

  const handleIgReset = () => {
    setIgSelectedItems([]);
    setIgOutputStatus("idle");
  };

  // Run Test Plan Generator via Gemini or mock fallback
  const handleGenerateTestSuite = async (featureStr: string) => {
    if (!featureStr.trim()) return;
    setIsGenerating(true);
    setGeneratedResult(null);

    // If Gemini key is set, call Gemini API client-side directly
    if (geminiKey) {
      try {
        const systemPrompt = `You are a Senior SQA AI Architect. Your task is to analyze a user-specified software feature or user flow, and output a professional, production-grade SQA Test Plan.

Structure your response into the following clear sections:
1. **Overview**: High-level explanation of typical testing objectives.
2. **Positive Test Cases**: Core happy paths with steps and expected results.
3. **Negative & Edge Cases**: Edge inputs, abnormal routes, error handling.
4. **Boundary Value Analysis (BVA)**: Crucial boundary criteria (e.g. min, max, boundary-1, boundary+1 outputs) - reference Hassaan's discovery of the Instagram 100-item boundary error if applicable to selection lists!
5. **Predictive System Log Criteria**: Describe how backend developer logs or assertions should look on success or failure (Hassaan's "Predictive Log Analysis via GenAI" approach).
6. **Heuristic & UX Feedback**: Aesthetic/UI/UX feedback representing great Product Management sense.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `Generate a full SQA Test Suite for the following feature:\n"${featureStr}"` }]
              }
            ],
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            },
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 1000
            }
          })
        });

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          setGeneratedResult(text);
        } else {
          setGeneratedResult("No response text returned from Gemini API.");
        }
      } catch (err: any) {
        console.error("Gemini SQA Generation Error:", err);
        setGeneratedResult(`Error contacting Gemini API: ${err.message || 'Verification fail.'}. Running in local simulation mode instead.`);
        setTimeout(() => simulateLocalPlan(featureStr), 1500);
      } finally {
        setIsGenerating(false);
      }
    } else {
      // Mock Fallback Simulation
      setTimeout(() => {
        simulateLocalPlan(featureStr);
        setIsGenerating(false);
      }, 1500);
    }
  };

  const simulateLocalPlan = (featureStr: string) => {
    const mockOutput = `### SQA Test Plan: ${featureStr} (SIMULATED MODE)
*(Note: To generate live AI test cases, paste your Gemini API Key in the Developer Console or AI Twin card)*

#### 1. Overview
Ensure correct operational behavior, UI boundary controls, and transaction verification states for the "${featureStr}" module.

#### 2. Positive Test Cases
* **TC-01: Happy Path Validation**
  * **Steps**: Input valid parameters, trigger request queue, verify status callback.
  * **Expected Result**: System processes parameters in < 200ms and registers state as SUCCESS.

#### 3. Negative & Edge Cases
* **TC-02: Empty / Nil Input Exceptions**
  * **Steps**: Click submit without configuring fields.
  * **Expected Result**: Client intercepts command, block submission, and displays a graceful alert toast.

#### 4. Boundary Value Analysis (BVA)
* **BVA-01**: Input size limit test:
  * N = 99: Succeeds smoothly.
  * N = 100: Reaches boundary constraint. Enforces capping validation.
  * N = 101: Discovered selection buffer latency overrun, causing async state loss. Enforce rigid frontend caps.

#### 5. Predictive System Log Criteria
\`\`\`log
[SUCCESS] queue_push: "${featureStr}" registered successfully.
[WARN] boundary_bva: selector buffer reached limit threshold (N=99).
[ERROR] buffer_overflow: Selection buffer array out of bounds (N=102). Transition aborted.
\`\`\`

#### 6. Heuristic & UX Feedback
* Enforce smooth state transitions using loading animations.
* Maintain clear contrast ratios on warning badges.`;
    setGeneratedResult(mockOutput);
  };

  const handleCopyMarkdown = () => {
    if (generatedResult) {
      navigator.clipboard.writeText(generatedResult);
      alert("Test plan copied to clipboard!");
    }
  };

  return (
    <section id="playgrounds" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-white font-mono">
            SQA TESTING <span className="bg-gradient-to-r from-[#ff3232] to-[#0096ff] bg-clip-text text-transparent">LABS</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto font-mono">
            {`> Interactive QA playgrounds auditing boundary values and generating plans.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LAB 01: Instagram Boundary Simulator */}
          <div className="bg-[#0a1535]/30 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-[#ff3232] uppercase tracking-wider block font-bold">
                  SQA LAB MODULE 01
                </span>
                <h4 className="font-bold text-sm text-white font-heading">
                  Instagram Watch History Cap Boundary Simulator
                </h4>
              </div>

              <div className="flex bg-[#050a1f] p-1 rounded-lg border border-white/10 gap-1 text-[11px]">
                <button
                  onClick={() => setIgTab("visual")}
                  className={`px-3 py-1 cursor-pointer transition-all uppercase tracking-wider text-[9px] rounded-md ${igTab === "visual" ? "bg-white text-black font-bold" : "text-gray-400 hover:text-white"}`}
                >
                  Device UI
                </button>
                <button
                  onClick={() => setIgTab("bugTicket")}
                  className={`px-3 py-1 cursor-pointer transition-all uppercase tracking-wider text-[9px] rounded-md ${igTab === "bugTicket" ? "bg-white text-black font-bold" : "text-gray-400 hover:text-white"}`}
                >
                  Bug Ticket
                </button>
              </div>
            </div>

            {igTab === "visual" ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Simulating a real client-backend constraint error discovered on <strong>Instagram Mobile App Watch History</strong>. Deleting items succeeds under N=100 boundary, but crashes or locks the select queue above it.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#050a1f] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-mono text-gray-400">
                      Items: <span className="font-bold text-white">{igSelectedItems.length}</span> / {igItemCount}
                    </div>

                    {igOutputStatus === "triggered" && (
                      <span className="px-2 py-0.5 bg-[#ff3232]/10 border border-[#ff3232]/35 text-[#ff3232] text-[9px] rounded font-bold flex items-center gap-1 animate-pulse">
                        <AlertTriangle className="w-3 h-3" />
                        EXCEPTION TRIGGERED (N &gt;= 100)
                      </span>
                    )}

                    {igOutputStatus === "passed" && (
                      <span className="px-2 py-0.5 bg-[#0096ff]/10 border border-[#0096ff]/35 text-[#0096ff] text-[9px] rounded font-semibold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        Valid Pool
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 font-mono">
                    <button
                      onClick={handleIgBulkSelectAll}
                      className="px-2.5 py-1 text-[9px] uppercase font-bold text-white hover:bg-white/5 rounded border border-white/10 cursor-pointer"
                    >
                      Fill 95
                    </button>
                    
                    {igSelectedItems.length < 100 && (
                      <button
                        onClick={triggerDefectBurst}
                        className="px-2.5 py-1 text-[9px] uppercase font-bold text-[#ff3232] hover:bg-[#ff3232]/10 rounded border border-[#ff3232]/25 cursor-pointer"
                      >
                        Push 102
                      </button>
                    )}

                    <button
                      onClick={handleIgReset}
                      className="p-1 px-2 text-gray-400 hover:text-white cursor-pointer"
                      title="Reset Simulator"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Grid */}
                <div className="bg-[#050a1f] p-4 border border-white/5 rounded-xl">
                  <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5 select-none">
                    {Array.from({ length: igItemCount }).map((_, idx) => {
                      const id = idx + 1;
                      const selected = igSelectedItems.includes(id);
                      return (
                        <div
                          key={id}
                          onClick={() => toggleIgItemSelection(id)}
                          className={`aspect-square border flex items-center justify-center font-mono text-[8px] cursor-pointer rounded transition-all duration-100 ${
                            selected
                              ? "bg-gradient-to-br from-[#ff3232] to-[#b01e1e] border-[#ff3232]/40 text-white font-bold scale-95 shadow-inner"
                              : "bg-[#0a1535]/30 border-white/5 text-gray-500 hover:border-white/15"
                          }`}
                        >
                          <span>#{id}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 font-mono text-xs text-gray-400 bg-[#050a1f] p-5 rounded-xl border border-white/5 leading-relaxed text-left">
                <div className="flex items-center gap-2 text-[#ff3232] border-b border-white/5 pb-2">
                  <Bug className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider">DEFECT DETAILS: INSTA-QA-2026-BVA</span>
                </div>
                <div className="space-y-1">
                  <p><strong className="text-white">Title:</strong> watchHistory Selection Buffer Overrun &amp; Latency Failure</p>
                  <p><strong className="text-white">Assigned:</strong> Hassaan Abdullah Kayani (UIIT QA Lead)</p>
                  <p><strong className="text-white">Heuristics:</strong> Discrepancy between client UI pop count and server bulk transaction limits.</p>
                  <p><strong className="text-white">Checked Boundaries:</strong> N = 99 (Safe), N = 100 (Array size overrun exception, UI freezes)</p>
                  <hr className="border-white/5 my-2" />
                  <p className="italic text-gray-500">
                    &quot;The selection loop crashes when bulk selecting more than 99 index segments since the concurrent client pop operations overwhelm the API batch buffer size.&quot;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* LAB 02: Automated SQA Test Plan Generator */}
          <div className="bg-[#0a1535]/30 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-6">
            <div className="space-y-1 border-b border-white/5 pb-4">
              <span className="text-[9px] font-mono text-[#0096ff] uppercase tracking-wider block font-bold">
                SQA LAB MODULE 02
              </span>
              <h4 className="font-bold text-sm text-white font-heading">
                AI SQA Test Suite Architect (Gemini Engine)
              </h4>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Enter any feature structure or api controller endpoint below, and trigger the generator to draft structured test plan schemas.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={testFeature}
                onChange={(e) => setTestFeature(e.target.value)}
                placeholder="e.g. JWT Auth Expiry, Cart Discount..."
                className="flex-1 bg-[#050a1f] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all placeholder:text-gray-600 font-mono"
              />
              <button
                type="button"
                onClick={() => handleGenerateTestSuite(testFeature)}
                disabled={isGenerating || !testFeature.trim()}
                className="px-5 py-3 bg-white text-black font-bold rounded-xl text-xs disabled:opacity-40 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#0096ff]" />
                    <span>Run AI Architect</span>
                  </>
                )}
              </button>
            </div>

            {/* Template helpers */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[9px] text-gray-500 uppercase font-semibold">Presets:</span>
              {SQA_TEMPLATES.map((tpl, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTestFeature(tpl);
                    handleGenerateTestSuite(tpl);
                  }}
                  className="text-[9px] px-2.5 py-1 bg-[#050a1f] hover:bg-white/5 text-gray-400 rounded-lg border border-white/10 cursor-pointer"
                >
                  {tpl}
                </button>
              ))}
            </div>

            {/* Generated output */}
            {generatedResult && (
              <div className="bg-[#050a1f] p-4 rounded-xl border border-white/5 space-y-3 max-h-[300px] overflow-y-auto font-mono text-[11px] leading-relaxed text-left text-gray-300">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[9px] font-mono text-[#0096ff] uppercase font-bold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    Generated Test Suite Markdown
                  </span>
                  <button
                    onClick={handleCopyMarkdown}
                    className="text-[9px] font-mono font-bold text-gray-500 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                </div>
                <div className="whitespace-pre-wrap font-sans text-xs">
                  {generatedResult}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
