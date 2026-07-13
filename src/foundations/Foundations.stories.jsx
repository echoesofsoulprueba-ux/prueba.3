import colors from '../tokens/colors.json'
import typography from '../tokens/typography.json'
import colorScales from '../tokens/colorScales.json'
import typographyScale from '../tokens/typographyScale.json'

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

const SEMANTIC_SPECS = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Accent / Secondary' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'error', label: 'Error / Destructive' },
]

const NEUTRAL_SPECS = [
  { key: 'foreground', label: 'Foreground' },
  { key: 'secondaryForeground', label: 'Secondary text / FG' },
  { key: 'mutedForeground', label: 'Muted FG' },
  { key: 'border', label: 'Border' },
  { key: 'muted', label: 'Muted Background' },
]

const SURFACE_SPECS = [
  { key: 'background', label: 'Background' },
  { key: 'card', label: 'Card' },
  { key: 'sidebar', label: 'Sidebar' },
  { key: 'sidebarActive', label: 'Sidebar Active' },
]

function ColorCard({ label, hex }) {
  return (
    <div>
      <div className="h-16 rounded-xl border border-black/10" style={{ backgroundColor: hex }} />
      <p className="mt-2 text-xs font-semibold">{label}</p>
      <p className="text-[11px] font-mono text-gray-500">{hex}</p>
    </div>
  )
}

function ColorCardGrid({ specs }) {
  const present = specs.filter(function (s) { return colors[s.key] })
  if (!present.length) return null
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {present.map(function (s) {
        return <ColorCard key={s.key} label={s.label} hex={colors[s.key]} />
      })}
    </div>
  )
}

function SectionLabel({ children }) {
  return <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2">{children}</h4>
}

function ScaleRow({ family, roleLabel }) {
  if (!family || !family.shades) return null
  return (
    <div className="mb-4">
      <p className="text-xs font-medium mb-2">{family.familyName + ' (' + roleLabel + ')'}</p>
      <div className="flex gap-1.5">
        {SHADES.map(function (shade) {
          return (
            <div key={shade} className="flex-1 text-center">
              <div className="h-10 rounded-md border border-black/10" style={{ backgroundColor: family.shades[shade] }} />
              <span className="block mt-1 text-[10px] font-mono text-gray-500">{shade}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function resolveFontFamily(style) {
  if (style.role === 'body') return typography.fontFamily || 'Inter, sans-serif'
  return typography.fontFamilyDisplay || typography.fontFamily || 'Inter, sans-serif'
}

function TypographyTable() {
  const styles = typographyScale.slice().sort(function (a, b) { return b.sizePx - a.sizePx })
  if (!styles.length) return null
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-gray-50 border-b border-gray-200 text-[10px] font-mono uppercase tracking-wider text-gray-500">
        <span>Estilo</span>
        <span>Vista previa</span>
        <span>Tamaño</span>
        <span>Peso</span>
      </div>
      {styles.map(function (style) {
        return (
          <div key={style.name} className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-gray-100 items-center">
            <div>
              <p className="text-xs font-semibold">{style.name}</p>
              <p className="text-[10px] text-gray-500">{style.description}</p>
            </div>
            <p style={{ fontFamily: resolveFontFamily(style), fontSize: Math.min(style.sizePx, 28), fontWeight: style.weightValue }}>
              Aa Bb Cc
            </p>
            <span className="text-[11px] font-mono text-gray-500">{style.sizePx + 'px / ' + style.sizeRem + 'rem'}</span>
            <span className="text-[11px] font-mono text-gray-500">{style.weightValue + ' ' + style.weightName}</span>
          </div>
        )
      })}
    </div>
  )
}

function FoundationsPage() {
  const totalTokens = Object.keys(colors).length
  const hasScales = colorScales && (colorScales.primary || colorScales.accent || colorScales.neutral)

  return (
    <div className="p-6 space-y-8 font-sans max-w-4xl">
      <div>
        <p className="text-[11px] font-mono font-semibold uppercase tracking-wider mb-1.5" style={{ color: colors.primary }}>
          Foundation
        </p>
        <h1 className="text-2xl font-bold">Colors &amp; Typography</h1>
        <p className="text-sm text-gray-500 mt-1">Los tokens base que definen la identidad visual del design system.</p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
          <h2 className="text-base font-semibold">Paleta de Colores</h2>
          <span className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {totalTokens + ' tokens'}
          </span>
        </div>

        <div>
          <SectionLabel>Colores semánticos</SectionLabel>
          <ColorCardGrid specs={SEMANTIC_SPECS} />
        </div>

        <div>
          <SectionLabel>Neutros</SectionLabel>
          <ColorCardGrid specs={NEUTRAL_SPECS} />
        </div>

        <div>
          <SectionLabel>Superficies</SectionLabel>
          <ColorCardGrid specs={SURFACE_SPECS} />
        </div>

        {hasScales && (
          <div>
            <SectionLabel>Escalas de color</SectionLabel>
            <ScaleRow family={colorScales.primary} roleLabel="Primary" />
            <ScaleRow family={colorScales.accent} roleLabel="Accent" />
            <ScaleRow family={colorScales.neutral} roleLabel="Neutral" />
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-base font-semibold">Tipografía</h2>
          <p className="text-xs text-gray-500 mt-0.5">{typography.fontFamily || 'Inter, sans-serif'}</p>
        </div>
        <div>
          <SectionLabel>Escala tipográfica</SectionLabel>
          <TypographyTable />
        </div>
      </section>
    </div>
  )
}

export default {
  title: 'Foundations/Colors & Typography',
}

export const Overview = {
  render: function () {
    return <FoundationsPage />
  },
}
