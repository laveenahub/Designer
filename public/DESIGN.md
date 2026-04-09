# Design System: The Nocturnal Sanctuary

## 1. Overview & Creative North Star
The "Nocturnal Sanctuary" is a high-end editorial framework designed to transform a digital interface into a restorative, low-light environment. While traditional dark modes focus on pure utility, this system prioritizes **Emotional Depth** and **Visual Quiet**. 

**Creative North Star: "The Velvet Curator"**
We reject the "flat" nature of standard dark themes. Instead, we treat the screen as a series of depth-mapped layers. By breaking the rigid, boxy constraints of standard UI through intentional asymmetry and varying corner radii, we create a layout that feels organic and breathable. This is a premium experience that values the "negative space" as much as the content itself.

---

## 2. Colors & Atmospheric Layering
Our palette is anchored in deep midnight tones, utilizing the `#2D9CDB` primary accent not as a loud highlight, but as a glowing "digital bioluminescence" against the dark.

### The "No-Line" Rule
**Lines are scars on a clean interface.** In this design system, 1px solid borders for sectioning are strictly prohibited. You must define boundaries through:
- **Tonal Shifts:** Placing a `surface_container_low` element against a `surface` background.
- **Soft Shadows:** Using ambient light to lift an element.
- **Negative Space:** Increasing the gap between functional groups to imply separation.

### Surface Hierarchy & Nesting
Depth is achieved through "Tonal Stacking." Imagine sheets of semi-opaque obsidian stacked upon one another.
*   **Base Layer:** `surface` (#0b1326)
*   **Sectioning:** `surface_container_low` (#131b2e)
*   **Active Elements:** `surface_container_high` (#222a3d)
*   **Peak Importance:** `surface_bright` (#31394d)

### The "Glass & Gradient" Rule
To achieve a signature, custom feel, use **Glassmorphism** for all floating overlays (modals, tooltips, navigation bars).
*   **Formula:** `surface_container` at 70% opacity + `backdrop-filter: blur(24px)`.
*   **Signature Textures:** Use a linear gradient from `primary` (#8ccdff) to `primary_container` (#2d9cdb) at a 135-degree angle for primary CTAs. This creates a "glow" effect rather than a flat fill.

---

## 3. Typography: Editorial Authority
We utilize a dual-font strategy to balance technical precision with human warmth.

*   **Display & Headlines (Manrope):** Large, bold, and authoritative. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an editorial "poster" feel. Headlines should be `on_surface` (crisp white) to command attention.
*   **Body & Labels (Plus Jakarta Sans):** Designed for maximum legibility in low light. Use `body-lg` for primary reading. Ensure `on_surface_variant` (light gray) is used for secondary information to reduce "visual vibration" against the dark background.
*   **Hierarchy Tip:** Never use "Pure White" (#FFFFFF) for long-form body text; stick to `on_surface` (#dae2fd) to prevent eye fatigue.

---

## 4. Elevation & Depth
In a "Digital Sanctuary," depth must feel natural, not artificial.

*   **The Layering Principle:** Place `surface_container_lowest` (#060e20) for "wells" (e.g., code blocks or inset feeds) and `surface_container_highest` (#2d3449) for cards that need to pop.
*   **Ambient Shadows:** For floating elements, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow color should never be neutral gray; it must be a deep midnight tint derived from `surface_container_lowest`.
*   **The "Ghost Border" Fallback:** If accessibility demands a container edge, use the `outline_variant` (#3f4850) at **15% opacity**. This creates a "suggestion" of a border that only appears when the eye seeks it.

---

## 5. Components

### Buttons: The Radiant Nodes
*   **Primary:** Gradient of `primary` to `primary_container`. Border radius: `full`. 
*   **Secondary:** Ghost style. No background fill. `Ghost Border` (15% opacity `outline_variant`) with `on_surface` text.
*   **State:** On hover, primary buttons should increase their "glow" (shadow spread), not just change color.

### Cards: The Floating Panes
*   **Style:** No borders. Use `md` (1.5rem) or `lg` (2rem) rounded corners.
*   **Interaction:** On hover, a card should transition from `surface_container` to `surface_container_high` with a subtle `y-axis` lift of 4px.

### Inputs: Soft Receptacles
*   **Background:** `surface_container_lowest`.
*   **Focus State:** A 2px glow of `primary` (#8ccdff) using `box-shadow`, never a solid stroke.

### Specialized Component: The "Breathing" Chip
*   **Context:** Selection or Status.
*   **Style:** `surface_variant` background with `on_surface_variant` text. When active, use a subtle pulse animation on the background opacity to mimic a "living" wellness app.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Offset your hero text or allow images to bleed off the grid to create a custom, high-end feel.
*   **Prioritize Breathing Room:** Use the `xl` (3rem) spacing token between unrelated functional blocks.
*   **Use Tonal Transitions:** Use background color shifts to guide the user's eye down the page.

### Don't:
*   **Don't use Divider Lines:** Use vertical whitespace or a 1-step shift in surface color instead.
*   **Don't use 100% Opacity Borders:** They break the "Glassmorphism" illusion and feel like a template.
*   **Don't Overuse the Primary Color:** `primary_container` (#2d9cdb) is a powerful tool. Use it sparingly for CTAs and key indicators to maintain the "calm" of the sanctuary.
*   **Don't use standard "Drop Shadows":** Always use wide, diffused ambient shadows with low opacity.