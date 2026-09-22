import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    q: 'What does NIC stand for?',
    options: [
      { text: 'Network Internal Connection', correct: false },
      { text: 'Network Interface Card', correct: true },
      { text: 'Network Internet Computer', correct: false },
      { text: 'Numeric Internet Code', correct: false },
    ],
    explanation: 'NIC stands for Network Interface Card — the hardware component that connects a computer to a network.',
  },
  {
    q: 'Which IEEE standard defines Ethernet?',
    options: [
      { text: 'IEEE 802.11', correct: false },
      { text: 'IEEE 802.15', correct: false },
      { text: 'IEEE 802.3', correct: true },
      { text: 'IEEE 802.5', correct: false },
    ],
    explanation: 'IEEE 802.3 is the standard that defines wired Ethernet. 802.11 is WiFi, 802.15 is Bluetooth, and 802.5 was Token Ring.',
  },
]

export default function Quiz() {
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})

  const handleAnswer = (qIdx, optIdx) => {
    if (revealed[qIdx]) return
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
    setRevealed((prev) => ({ ...prev, [qIdx]: true }))
  }

  const score = Object.entries(answers).filter(([qIdx, optIdx]) =>
    questions[qIdx].options[optIdx].correct
  ).length

  const allAnswered = Object.keys(revealed).length === questions.length

  const reset = () => {
    setAnswers({})
    setRevealed({})
  }

  return (
    <SectionWrapper id="quiz">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-accent-cyan font-heading text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          11 — Quiz
        </motion.p>
        <motion.h2
          className="font-heading text-section text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Test Your <span className="gradient-text">Knowledge</span>
        </motion.h2>
        <motion.p
          className="text-text-muted font-body text-body max-w-2xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Let's see what you learned. Pick an answer for each question.
        </motion.p>

        <div className="space-y-10">
          {questions.map((q, qIdx) => (
            <motion.div
              key={qIdx}
              className="glass-panel p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qIdx * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center font-heading font-bold text-accent-cyan text-sm">
                  Q{qIdx + 1}
                </span>
                <h3 className="font-heading font-semibold text-text-primary text-xl">
                  {q.q}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, optIdx) => {
                  const isAnswered = revealed[qIdx]
                  const isSelected = answers[qIdx] === optIdx
                  const isCorrect = opt.correct

                  let classes = 'w-full text-left p-4 rounded-xl border transition-all duration-300 font-body '

                  if (!isAnswered) {
                    classes += 'border-white/10 bg-bg-elevated/50 text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/5 cursor-pointer'
                  } else if (isSelected && isCorrect) {
                    classes += 'border-green-500/50 bg-green-500/10 text-green-400'
                  } else if (isSelected && !isCorrect) {
                    classes += 'border-red-500/50 bg-red-500/10 text-red-400'
                  } else if (isCorrect) {
                    classes += 'border-green-500/30 bg-green-500/5 text-green-400/70'
                  } else {
                    classes += 'border-white/5 bg-bg-elevated/30 text-text-dim'
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswer(qIdx, optIdx)}
                      className={classes}
                      disabled={isAnswered}
                    >
                      <span className="font-heading font-medium text-sm mr-2 opacity-60">
                        {String.fromCharCode(65 + optIdx)})
                      </span>
                      {opt.text}
                      {isAnswered && isSelected && isCorrect && (
                        <span className="ml-2">✓</span>
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <span className="ml-2">✗</span>
                      )}
                    </button>
                  )
                })}
              </div>

              <AnimatePresence>
                {revealed[qIdx] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 rounded-xl bg-bg-elevated/50 border border-white/5"
                  >
                    <p className="text-text-muted font-body text-small">
                      {q.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Score */}
        <AnimatePresence>
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 glass-panel p-8 text-center relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">
                  {score === 2 ? '🎉' : score === 1 ? '👍' : '📚'}
                </div>
                <p className="font-heading text-display font-bold gradient-text mb-2">
                  {score} / {questions.length}
                </p>
                <p className="text-text-muted font-body text-body mb-6">
                  {score === 2 ? 'Perfect score! You nailed it.' : score === 1 ? 'Not bad — one more review and you\'re set.' : 'Time to re-read the presentation!'}
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan font-heading font-medium hover:bg-accent-cyan/20 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent-cyan to-transparent mb-6" />
          <p className="text-text-dim font-body text-small">
            Thank you for watching — English 10 Comp Presentation
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
