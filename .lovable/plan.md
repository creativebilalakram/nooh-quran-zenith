

## Update Pricing Section

**Single file change:** `src/components/landing/PricingSection.tsx`

Replace the `plans` array with the new data. Keep all existing component logic, animations, and CTA behavior intact.

### New Plans Data

| | 5 Days/Week (Popular) | 3 Days/Week | 1 Day/Week |
|---|---|---|---|
| Price | $150/mo | $100/mo | $50/mo |
| Duration | 30 min/class | 30 min/class | 30 min |
| Features | Nazra, Tajweed, Hifz / Basic Islamic Learning | Nazra, Tajweed, Basic Learning | Revision, Basic Guidance |

### Changes

1. **Update `plans` array** — replace all 3 plan objects with new titles ("5 Days / Week", "3 Days / Week", "1 Day / Week"), prices ($150, $100, $50), classes info, and feature lists as specified above.

2. **Mark "5 Days / Week" as `popular: true`** — the other two as `false`. This keeps the existing "Most Popular" badge, animated border, and scale styling working automatically.

3. **Reorder plans**: 1 Day → 5 Days (popular, center) → 3 Days — so the highlighted plan stays in the middle on desktop.

No layout, animation, or CTA logic changes needed — the existing component already handles hover effects, smooth scroll to form, plan context, and responsive stacking.

