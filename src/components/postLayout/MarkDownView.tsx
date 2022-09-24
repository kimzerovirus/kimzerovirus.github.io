import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import markDownBlocks from 'src/components/markdownBlocks';
import { StaticProps } from 'src/pages/post/project/[slug]';
import { dateFormat } from 'src/utils/dateFormat';

export default function MarkDownView({ htmlstring, data }: StaticProps) {
	return (
		// <div style={{ borderTop: '1px solid #ddd', width: '100%' }}>
		<div>
			<Container maxWidth="md">
				<TitleTypo>{data.title}</TitleTypo>
				<Typography
					variant="body1"
					noWrap
					component="p"
					mt={1}
					mb={6}
					sx={{
						color: '#afafaf',
						textAlign: 'center',
					}}
				>
					{dateFormat(data.date)}
				</Typography>

				<ReactMarkdown
					className="markdown-style"
					remarkPlugins={[remarkGfm]} // TODO link, table, checklist - styling
					rehypePlugins={[[rehypeRaw, { passThrough: ['element'] }]]}
					components={markDownBlocks}
				>
					{htmlstring
						.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n')
						.replace(/\*\*/gi, '@$_%!^')
						.replace(/@\$_%!\^/gi, '**')
						.replace(/<\/?u>/gi, '*')}
				</ReactMarkdown>
			</Container>
		</div>
	);
}

// const DesignedBox = styled.div`
// 	width: 100%;
// 	div {
// 		width: 1.5rem;
// 		height: 2px;
// 		background-color: #afafaf;
// 		margin: 1rem auto 3rem;
// 	}
// `;

const TitleTypo = styled.h1`
	color: #6868ac;
	font-weight: 700;
	text-align: center;
	width: 100%;
	display: block;
	font-size: 3rem;
	margin-top: 6rem;

	@media (max-width: 767px) {
		//모바일
		margin-top: 1rem;
		font-size: 2rem;
	}
`;