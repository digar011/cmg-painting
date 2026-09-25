import type { ServiceCategory } from './constants';

/**
 * Real CMG Painting & Design project photos (public/images/projects).
 * Captions describe only what each photo shows. Locations are kept general
 * to protect homeowner privacy; photo metadata (GPS) was stripped on export.
 */
export interface Project {
  id: string;
  title: string;
  category: ServiceCategory;
  location: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const REGION = 'Northern New Jersey';

const project = (
  id: string,
  title: string,
  category: ServiceCategory,
  description: string,
  imageAlt: string,
): Project => ({
  id,
  title,
  category,
  location: REGION,
  description,
  imageSrc: `/images/projects/${id}.webp`,
  imageAlt,
});

export const PROJECTS: readonly Project[] = [
  project('cape-cod-after', 'Cape Cod Exterior — After', 'Exterior', 'Weathered cedar shingles prepped, primed and painted in a fresh warm yellow with crisp white trim.', 'Cape Cod home with freshly painted yellow shingle siding and white trim'),
  project('cape-cod-before', 'Cape Cod Exterior — Before', 'Exterior', 'The same home before our crew started: bare, weathered cedar shingles.', 'Cape Cod home with weathered unpainted cedar shingles before painting'),
  project('clapboard-restoration-after', 'Clapboard Restoration — After', 'Exterior', 'Full scrape, repair and repaint of an older clapboard home, bringing the siding back to a clean white finish.', 'Two-story clapboard home repainted white'),
  project('clapboard-restoration-before', 'Clapboard Restoration — Before', 'Exterior', 'Heavily peeling paint and exposed wood before restoration.', 'Clapboard home with heavily peeling paint before restoration'),
  project('colonial-exterior', 'Colonial Exterior Repaint', 'Exterior', 'Two-story colonial with dormers repainted in a soft blue-gray with bright white trim.', 'Blue-gray colonial home with white trim and dormers'),
  project('dutch-colonial-exterior', 'Dutch Colonial Exterior', 'Exterior', 'Gambrel-roof home refreshed with a greige body color and white trim and railings.', 'Dutch colonial gambrel home painted greige with white trim'),
  project('white-colonial-exterior', 'White Colonial with Red Door', 'Exterior', 'Classic colonial repainted white with black shutters and a statement red entry.', 'White colonial home with black shutters and red front door'),
  project('red-front-door', 'Statement Front Door', 'Exterior', 'Entry door finished in a glossy red, framed by fresh white trim and sidelights.', 'Glossy red front door with white trim and sidelights'),
  project('victorian-porch-home', 'Victorian Porch Home', 'Exterior', 'Farmhouse-style home with a full wraparound porch painted in clean whites.', 'White Victorian home with full front porch'),
  project('carriage-garage-doors', 'Carriage Garage Doors', 'Exterior', 'Detached garage with carriage-style doors and trim painted to match the main house.', 'Detached garage with white carriage-style doors'),
  project('front-porch-steps', 'Front Porch & Steps', 'Carpentry', 'Porch floor and steps finished in a rich red stain with white risers and railings.', 'Front porch steps stained red with white risers'),
  project('porch-floor-stain', 'Porch Floor Staining', 'Powerwashing', 'Porch decking cleaned and stained for a warm, even finish.', 'Stained wooden porch floor'),
  project('deck-powerwash', 'Deck Powerwashing', 'Powerwashing', 'Our crew powerwashing a wood deck to prep it for stain.', 'Painter powerwashing a wooden deck'),
  project('deck-stain', 'Deck Stain Refresh', 'Powerwashing', 'Cleaned and stained deck boards with a deep semi-transparent finish.', 'Freshly stained wooden deck boards'),
  project('built-ins-fireplace-wall', 'Custom Built-Ins & Fireplace Wall', 'Carpentry', 'Painted built-in cabinetry and shelving framing a brick fireplace and media wall.', 'Living room with white painted built-ins around a brick fireplace'),
  project('kitchen-renovation', 'Kitchen Refresh', 'Interior', 'Kitchen with new subway-tile backsplash, fresh walls and trim.', 'Kitchen with wood cabinets and white subway tile backsplash'),
  project('dining-room-wallpaper', 'Dining Room Wallpaper', 'Interior', 'Dark patterned wallpaper installed in a formal dining room.', 'Dining room with dark patterned wallpaper and chandelier'),
  project('powder-room-wallpaper', 'Powder Room Wallpaper', 'Interior', 'Floral wallpaper installation in a powder room.', 'Powder room with navy floral wallpaper'),
  project('foyer-staircase', 'Foyer & Staircase', 'Interior', 'Entry foyer walls, trim and staircase balusters painted with a clean, bright finish.', 'Foyer with painted walls and white staircase balusters'),
  project('senior-living-corridor', 'Senior Living Corridor', 'Interior', 'Commercial repaint of a senior-living residence corridor, including doors and trim.', 'Senior living hallway with freshly painted walls'),
  project('auto-showroom', 'Auto Showroom', 'Interior', 'Commercial interior repaint of a car dealership showroom.', 'Car dealership showroom interior'),
];

/** Header photos for each service page (public/images/services). */
export const SERVICE_IMAGES = {
  'interior-painting': { src: '/images/services/interior-painting.webp', alt: 'Foyer with freshly painted walls, trim and staircase' },
  'exterior-painting': { src: '/images/services/exterior-painting.webp', alt: 'Colonial home exterior repainted blue-gray with white trim' },
  powerwashing: { src: '/images/services/powerwashing.webp', alt: 'CMG crew powerwashing a wooden deck' },
  'light-carpentry': { src: '/images/services/light-carpentry.webp', alt: 'Painted built-in cabinetry around a brick fireplace' },
} as const;

/** Home hero background. AI-generated, NOT a real CMG project: never caption or present it as one. */
export const HERO_IMAGE = {
  src: '/images/hero-home.webp',
  alt: 'Freshly painted colonial home at golden hour',
} as const;
