import React from 'react'

export const THEMES = [
  { id: 'navy',  label: 'Navy',  icon: '🌌', title: 'Navy Command (Original)' },
  { id: 'slate', label: 'Slate', icon: '🪨', title: 'Modern Charcoal Slate' },
  { id: 'oled',  label: 'OLED',  icon: '🌑', title: 'Pure Black OLED' },
  { id: 'light', label: 'Light', icon: '☀️', title: 'Clean Light Mode' },
]

export default function ThemeSwitcher({ currentTheme, onThemeChange }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Theme selector">
      {THEMES.map(t => (
        <button
          key={t.id}
          type="button"
          className={`theme-btn ${currentTheme === t.id ? 'active' : ''}`}
          onClick={() => onThemeChange(t.id)}
          title={t.title}
        >
          <span className="theme-btn-icon">{t.icon}</span>
          <span className="theme-btn-label">{t.label}</span>
        </button>
      ))}
    </div>
  )
}
