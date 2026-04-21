// Generates a stylized placeholder SVG for each product, keyed by id.
// Each direction can theme it (bg color, fg color, wapuu flag, etc).
window.MERCANTILE_ART = function productArt(id, opts = {}) {
  const {
    bg = '#eef1ff',
    fg = '#3858e9',
    ink = '#111',
    variant = 'editorial', // 'editorial' | 'playful' | 'wapuu'
  } = opts;

  const garments = ['tee', 'hoodie', 'jogger', 'tank', 'crewneck'];
  const drinkware = ['bottle', 'mug', 'tumbler', 'cold-cup'];
  const accessories = ['pin', 'sticker', 'patch', 'popsocket', 'tote', 'gloves'];

  function pickKind(pid) {
    if (/tee|tshirt|shirt/.test(pid)) return 'tee';
    if (/hoodie/.test(pid)) return 'hoodie';
    if (/jogger/.test(pid)) return 'jogger';
    if (/short/.test(pid)) return 'short';
    if (/tank/.test(pid)) return 'tank';
    if (/crewneck|sweatshirt|twill/.test(pid)) return 'crewneck';
    if (/jacket/.test(pid)) return 'jacket';
    if (/bottle/.test(pid)) return 'bottle';
    if (/mug/.test(pid)) return 'mug';
    if (/tumbler/.test(pid)) return 'tumbler';
    if (/cold-cup|cup/.test(pid)) return 'cold-cup';
    if (/pin/.test(pid)) return 'pin';
    if (/sticker/.test(pid)) return 'sticker';
    if (/patch/.test(pid)) return 'patch';
    if (/popsocket/.test(pid)) return 'popsocket';
    if (/tote|bag/.test(pid)) return 'tote';
    if (/gloves/.test(pid)) return 'gloves';
    return 'tee';
  }

  const kind = pickKind(id);
  const isWapuu = /wapuu/.test(id);
  const label = kind.toUpperCase();

  // Simple, intentional placeholders: a muted blob + a mono caption saying what it is.
  const stripes = Array.from({length: 7}).map((_,i)=>(
    `<rect x="${i*50}" y="0" width="25" height="400" fill="${fg}" opacity="0.06"/>`
  )).join('');

  let shape = '';
  if (kind === 'tee' || kind === 'tank' || kind === 'crewneck' || kind === 'hoodie' || kind === 'jacket') {
    shape = `<path d="M100 120 L160 90 L180 110 L200 100 L220 110 L240 90 L300 120 L290 160 L260 150 L260 320 L140 320 L140 150 L110 160 Z" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'jogger' || kind === 'short') {
    const h = kind === 'short' ? 260 : 320;
    shape = `<path d="M140 110 L260 110 L270 ${h} L220 ${h} L200 170 L180 ${h} L130 ${h} Z" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'bottle') {
    shape = `<rect x="170" y="110" width="60" height="30" rx="4" fill="${fg}" opacity="0.82"/><rect x="160" y="140" width="80" height="180" rx="16" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'mug') {
    shape = `<rect x="150" y="150" width="110" height="140" rx="8" fill="${fg}" opacity="0.82"/><path d="M260 180 Q300 180 300 220 Q300 260 260 260" stroke="${fg}" stroke-width="10" fill="none" opacity="0.82"/>`;
  } else if (kind === 'tumbler' || kind === 'cold-cup') {
    shape = `<path d="M160 120 L240 120 L230 310 L170 310 Z" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'pin') {
    shape = `<circle cx="200" cy="200" r="70" fill="${fg}" opacity="0.82"/><circle cx="200" cy="200" r="30" fill="${bg}"/>`;
  } else if (kind === 'sticker') {
    shape = `<path d="M130 140 Q200 100 270 140 Q290 200 270 270 Q200 300 130 270 Q110 200 130 140 Z" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'patch') {
    shape = `<rect x="130" y="130" width="140" height="140" rx="14" fill="${fg}" opacity="0.82" stroke="${ink}" stroke-width="2" stroke-dasharray="6 4"/>`;
  } else if (kind === 'popsocket') {
    shape = `<circle cx="200" cy="200" r="80" fill="${fg}" opacity="0.82"/>`;
  } else if (kind === 'tote') {
    shape = `<path d="M140 160 L260 160 L270 310 L130 310 Z" fill="${fg}" opacity="0.82"/><path d="M170 160 Q170 110 200 110 Q230 110 230 160" stroke="${ink}" stroke-width="5" fill="none"/>`;
  } else if (kind === 'gloves') {
    shape = `<path d="M150 150 L190 150 L195 120 L210 120 L215 150 L250 160 L250 280 L150 280 Z" fill="${fg}" opacity="0.82"/>`;
  }

  let wapuuBadge = '';
  if (isWapuu) {
    wapuuBadge = `
      <g transform="translate(285 70)">
        <circle r="32" fill="#fff" stroke="${ink}" stroke-width="2"/>
        <ellipse cx="0" cy="2" rx="20" ry="22" fill="#6dc77a"/>
        <circle cx="-6" cy="-2" r="3" fill="${ink}"/>
        <circle cx="6" cy="-2" r="3" fill="${ink}"/>
        <path d="M-5 8 Q0 12 5 8" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>`;
  }

  return `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${id}">
      <rect width="400" height="400" fill="${bg}"/>
      ${variant === 'editorial' ? stripes : ''}
      ${shape}
      ${wapuuBadge}
      <text x="200" y="375" font-family="ui-monospace,monospace" font-size="11" fill="${ink}" text-anchor="middle" opacity="0.55">${label} · PLACEHOLDER</text>
    </svg>`;
};
