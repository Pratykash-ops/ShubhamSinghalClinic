
import React from 'react'
import { icons as LucideIcons } from 'lucide-react'
import Marquee from 'react-fast-marquee'

const issues = [
  { label: 'anxiety', icon: 'Activity' },
  { label: 'depression', icon: 'CloudDrizzle' },
  { label: 'social anxiety', icon: 'Users' },
  { label: 'ocd', icon: 'RefreshCcw' },
  { label: 'intrusive thoughts', icon: 'Zap' },
  { label: 'procrastination', icon: 'Clock' },
  { label: 'gaslighting', icon: 'AlertCircle' },
  { label: 'burnout', icon: 'Flame' },
  { label: 'stress', icon: 'Loader' },
  { label: 'irrational fear', icon: 'Ghost' },
  { label: 'cognitive distortion', icon: 'Brain' },
  { label: 'narcissism', icon: 'Smile' },
  { label: 'relationship issues', icon: 'HeartCrack' },
  { label: 'addiction', icon: 'Beer' },
  { label: 'eating disorders', icon: 'Utensils' },
  { label: 'body image issues', icon: 'Eye' },
  { label: 'anger management', icon: 'ZapOff' },
]

const gradients = [
  'from-pink-300 to-pink-100',
  'from-purple-300 to-purple-100',
  'from-green-300 to-green-100',
  'from-blue-300 to-blue-100',
  'from-yellow-300 to-yellow-100',
  'from-orange-300 to-orange-100',
]

const PsychologicalIssuesMarquee = () => {
  return (
    <div className="py-8">
      {[0, 1].map((row) => (
        <Marquee
          key={row}
          direction={row % 2 === 0 ? 'left' : 'right'}
          speed={30}
          gradient={false}
          className="gap-x-4 py-1 my-7"
        >
          {issues.map((issue, i) => {
            const Icon = LucideIcons[issue.icon]
            const gradient = gradients[i % gradients.length]

            return (
              <div
                key={`${issue.label}-${row}-${i}`}
                className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-full bg-white shadow text-sm font-medium text-gray-700`}
              >
                <div
                  className={`p-2 rounded-full bg-gradient-to-br ${gradient} text-transpa`}
                >
                  {Icon ? <Icon size={16} /> : null}
                </div>
                <span>{issue.label}</span>
              </div>
            )
          })}
        </Marquee>
      ))}
    </div>
  )
}

export default PsychologicalIssuesMarquee
