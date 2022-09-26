import { Button, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import lottieJson from 'public/rocket.json';
import Lottie from 'react-lottie-player';

export default function Home() {
	return (
		<Container maxWidth="xl">
			<Head>
				<title>kimzerovirus.log</title>
			</Head>

			{/* mobile */}
			<Grid container mt={3} sx={{ display: { xs: 'block', sm: 'none' } }}>
				<Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
					<MainImage />
				</Grid>
				<Grid item mt={3}>
					<MainTypo />
				</Grid>
			</Grid>

			<Grid
				container
				alignItems="center"
				justifyContent="center"
				style={{ height: '80vh', minHeight: '600px' }}
				sx={{ display: { xs: 'none', sm: 'flex' } }}
			>
				{/* tablet ~ pc */}
				<Grid item xs={8} pr={12}>
					<MainTypo />
				</Grid>

				<Grid item xs sx={{ display: 'flex', justifyContent: 'center' }}>
					<MainImage />
				</Grid>
			</Grid>
		</Container>
	);
}

const MainTypo = () => {
	return (
		<>
			<Typography
				component="h2"
				variant="h4"
				sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' } }}
			>
				{/* 안녕하세d요<span> </span>
				<br className="mobile" />
				빡빡이입니다!
				<br />
				오늘도 빡코딩? */}
				HI,
				<br />
				I'M KIMZEROVIRUS
				<br />
				WEB DEVELOPER.
			</Typography>

			<Typography
				component="p"
				variant="body1"
				mt={3}
				mb={3}
				sx={{ textAlign: { xs: 'center', sm: 'left' } }}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae temporibus tempora
				architecto excepturi quaerat enim maiores ab nam esse incidunt ducimus nemo nihil, similique
				minima eius officiis possimus libero reprehenderit.
			</Typography>

			<Link href="/post/project">
				<Button
					variant="contained"
					sx={{ width: { xs: '100%', sm: 'inherit' }, padding: '8px 24px', fontSize: '1.125rem' }}
				>
					{/* 프로젝트 보러가기 */}
					Check out my projects!
				</Button>
			</Link>
		</>
	);
};

const MainImage = () => {
	return <Lottie loop animationData={lottieJson} play style={{ width: `100%`, height: `100%` }} />;
};
