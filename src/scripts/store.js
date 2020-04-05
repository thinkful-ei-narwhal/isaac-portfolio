const apps = [
	{
		name: 'Quiz App',
		description: `Quiz App is a fun quiz game designed to challange your space esoteric knowledge.<br />
     This App was developed with:<br />
      HTML5,<br />
      jQuery,<br />
      CSS3, and<br />
      Javascript ( using MVC model ). <br />`,
		img: '../assets/img/quiz-app.jpg',
		url: 'https://thinkful-ei-narwhal.github.io/Quiz-Full-App-Nick-Isaac/',
		gitHub: 'https://github.com/thinkful-ei-narwhal/Quiz-Full-App-Nick-Isaac',
	},
	{
		name: 'Bookmark App',
		description: `Bookmark App was desinged to help it's users keep track of their most visited webpages.<br />
     This App was developed with:<br />
      HTML5,<br />
      jQuery,<br />
      CSS3, and<br />
      Javascript ( using MVC model ). <br />`,
		img: '../assets/img/bookmark-app.jpg',
		url: 'https://thinkful-ei-narwhal.github.io/-isaac_elesia-bookmark-app/',
		gitHub: 'https://github.com/thinkful-ei-narwhal/-isaac_elesia-bookmark-app',
	},
	{
		name: 'Matching Game',
		description: `Matching Game enables you to showcase how good your memory is, by matching each card with their corresponding partner. While making as little moves as possible.<br />
      Matching Game was developed with:<br />
      HTML5,<br />
      CSS3, and<br />
      Javascript ( using MVC model ). <br />`,
		img: '../assets/apps/MatchingGame/img/MatchingGame.PNG',
		url: '../assets/apps/MatchingGame/index.html',
		gitHub: 'https://github.com/IsaacElesia/memory-game',
	},
	{
		name: 'Foody',
		description: `Foody app was designed to make our life more enjoyable, by giving us the power to browse our favorite dish and get it’s recipes with preparation direction.<br />
    Foody was programmed with:<br />
    HTML5,<br />
    CSS3,<br />
    Javascript ( using MVC model ), and<br />
    Webpack.<br />`,
		img: '../assets/apps/Foody/img/Foody.PNG',
		url: '../assets/apps/Foody/index.html',
	},
	{
		name: 'Picture Gallery',
		description: `The power of beauty is at your finger tips. With Picture Gallery, you can search and view any thing you desire.<br />
    Picture Gallery was developed with:<br />
    HTML5,<br />
    CSS3,<br />
    Semantic Ui, and<br />
    React.<br />
    `,
		img: '../assets/apps/PicsGallery/img/PicsGallery.PNG',
		url: '../assets/apps/PicsGallery/index.html',
	},
	{
		name: 'B Jack',
		description: `This is a simplify back-jack game. Designed with the bare minimum rules of black-jack.<br />
    The game was built with:<br />
    HTML5,<br />
    CSS3, and<br />
    JAVASCRIPT.<br />
    `,
		img: '../assets/apps/Bjack/img/back_cards-07.png',
		url: '../assets/apps/Bjack/index.html',
	},
	{
		name: 'Budget Calculator ',
		description: `Do you find it difficult to keep track of you income and expenses? With Budget Calculator your nightmare will come to an end.<br />
    Budget Calculator was programmed with:<br />
    HTML5,<br />
    CSS, and<br />
    Javascript ( using MVC model ).<br />`,
		img: '../assets/apps/BudgetCal/img/budget.PNG',
		url: '../assets/apps/BudgetCal/index.html',
	},
	{
		name: 'Color Tester',
		description: `Are you a designer? Always trying out new shade of color. Colo Tester gives you the power to input your hexadecimal, rgb, or color-name and see the color shade. <br />
    This App was built with:<br />
    HTML5,<br />
    CSS3, and <br />
    Javascript.<br />`,
		img: '../assets/apps/ColorTester/img/ColorTester.PNG',
		url: '../assets/apps/ColorTester/index.html',
	},
	{
		name: 'L Shape Game',
		description: `A simple but interesting game, make an L shape with one kind of the card to win.<br />
      This game was developed with:<br />
      HTML5,<br />
      CSS ( css grid ), and<br />
      Javascript. <br />
      `,
		img: '../assets/apps/Lshape/img/Lshape.PNG',
		url: '../assets/apps/Lshape/index.html',
	},
	{
		name: 'Pig Game',
		description: `Pig game is a simple adaptive game, and it is played by rolling two dice. If the two dice display one, the game moves to the next player. The first player to reach final score wins. By default the final score is 100, but this can be change by entering the desired number before the game begins.<br />
    Pig game was developed with:<br />
    HTML5,<br />
    CSS3, and<br />
    javascript.<br />`,
		img: '../assets/apps/PigGame/img/PigGame.PNG',
		url: '../assets/apps/PigGame/index.html',
	},
	{
		name: 'Video Tube',
		description: `You-tube redefined, browse and watch your favorite videos on Video-Tube.<br />
    Video Tube was developed with:<br />
    HTML5,<br />
    CSS3,<br />
    Semantic Ui, and<br />
    React.<br />
    `,
		img: '../assets/apps/VideoTube/img/VideoTube.PNG',
		url: '../assets/apps/VideoTube/index.html',
	},
];

const coreTechnologies = [
	'JavaScript',
	'React',
	'HTML5',
	'CSS3',
	'Python',
	'Node js',
	'SQL',
	'jQuery',
];

let currentPage = 'home';

export default {
	apps,
	coreTechnologies,
	currentPage,
};
