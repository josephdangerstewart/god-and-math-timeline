// Import the icons
import {
	GiRingedPlanet,
	GiTriangleTarget,
} from 'react-icons/gi';
import {
	FaLandmark,
	FaCube,
} from 'react-icons/fa';

// Import the articles
import keplerArticle from './articles/kepler.md';
import pythagorasArticle from './articles/pythagoras.md';
import platoArticle from './articles/plato.md';
import aristotleArticle from './articles/aristotle.md';

export default [
	{
		title: 'Math and Mysticism... Mathticism',
		subtitle: 'Pythagoras',
		date: '570 BC - 495 BC',
		icon: GiTriangleTarget,
		article: pythagorasArticle,
		heroUrl: 'https://res.cloudinary.com/josephdangerstewart/image/upload/v1555083351/god-and-math/Bronnikov_gimnpifagoreizev.jpg',
		heroTitle: 'Pythagoras',
		who: 'A greek mathematician famous for the Pythagorean theorem and developments in music theory',
		ontology: 'Math has a very real ontological existence, existing in some realm with causal power',
		theology: 'Studying math was a form of worship to Apollo and partially how one could achieve the best possible reincarnation',
		era: 'classical',
	},
	{
		title: 'Math as a Self Existent Ontological Reality',
		subtitle: 'Plato',
		date: '428 BC - 347 BC',
		icon: FaCube,
		article: platoArticle,
		heroUrl: 'https://res.cloudinary.com/josephdangerstewart/image/upload/v1555093629/god-and-math/plato.jpg',
		heroTitle: 'Plato',
		who: 'Coming soon',
		ontology: 'Coming soon',
		theology: 'Coming soon',
		era: 'classical',
	},
	{
		title: 'Math as a Description of Reality',
		subtitle: 'Aristotle',
		date: '384 BC - 322 BC',
		icon: FaLandmark,
		article: aristotleArticle,
		who: 'Coming soon',
		ontology: 'Coming soon',
		theology: 'Coming soon',
		era: 'classical',
		heroUrl: 'https://res.cloudinary.com/josephdangerstewart/image/upload/v1555093845/god-and-math/Aristotle-Park-1000x500-c-center.jpg',
		heroTitle: 'Aristotle',
	},
	{
		title: 'Christian Math in a Geocentric Era',
		subtitle: 'Johannes Kepler',
		date: '1571 AD - 1630 AD',
		icon: GiRingedPlanet,
		article: keplerArticle,
		heroUrl: 'https://res.cloudinary.com/josephdangerstewart/image/upload/v1554924815/god-and-math/planets.jpg',
		heroTitle: 'Johannes Kepler',
		who: 'A scientific revolution era astronomer who came up with the three laws of planetary motion',
		ontology: 'Math is not self existent, but a constant language of nature',
		theology: 'God used math to define the universe and learning math get\'s one closer to God',
		era: 'scientific_revolution',
	},
];