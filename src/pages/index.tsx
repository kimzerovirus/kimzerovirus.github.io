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

			<Grid
				container
				alignItems="center"
				justifyContent="center"
				style={{ height: '80vh', minHeight: '600px' }}
			>
				<Grid item xs={8} pr={12}>
					<Typography component="h2" variant="h4" sx={{ fontWeight: 'bold' }}>
						안녕하세요 빡빡이입니다!
						<br />
						오늘도 빡코딩?
					</Typography>

					<Typography component="p" variant="body1" mt={3} mb={3}>
						인간의 그들의 가장 피다. 천고에 것은 끝까지 풍부하게 그것을 풀이 길지 피다. 굳세게
						인생의 사람은 따뜻한 시들어 끓는 그들에게 튼튼하며, 위하여, 듣는다. 가치를 그림자는
						이것은 자신과 듣기만 소리다.이것은 이것이다. 얼마나 위하여 뜨거운지라, 철환하였는가?
						위하여서, 그들의 피고 되려니와, 봄바람을 남는 영락과 천지는 같은 것이다. 만물은
						황금시대를 투명하되 그림자는 전인 우리는 가는 무엇을 있으랴? 이상 이것은 인간의 것은
						청춘의 황금시대다. 사랑의 풀이 대한 위하여서 것이다.
					</Typography>

					<Link href={process.env.NEXT_PUBLIC_PROJECT_FOLDER_PATH as string}>
						<Button variant="contained" sx={{ padding: '8px 24px', fontSize: '1.125rem' }}>
							프로젝트 보러가기
						</Button>
					</Link>
				</Grid>

				{/* 맥시멈 1024, 이하는 한 줄 내리는 레이아웃으로 만들어야 됨 */}
				<Grid item xs sx={{ display: 'flex', justifyContent: 'center' }}>
					<Lottie
						loop
						animationData={lottieJson}
						play
						style={{ width: `100%`, height: `100%`, maxWidth: `400px` }}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
