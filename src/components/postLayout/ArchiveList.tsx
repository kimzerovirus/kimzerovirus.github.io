import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';
import Tag from 'src/components/postLayout/Tag';
import { ArchiveProps, YearProps } from 'src/utils/staticDataUtils';

interface ArchiveListProps {
	archive: ArchiveProps;
	selected: string;
}

const ArchiveList: FC<ArchiveListProps> = ({ archive, selected }) => {
	return (
		<ArchiveBox>
			<div className="sticky">
				<TitleTypo title="archive" />
				<YearList yearList={archive.yearList} selected={selected} />

				<TitleTypo title="tag" />
				<TagList tagList={archive.tagList} selected={selected} />
			</div>
		</ArchiveBox>
	);
};

const ArchiveBox = styled.div`
	display: none;
	@media (min-width: 1280px) {
		display: block;
		width: 100%;
		height: inherit;
		max-width: 300px;
		min-height: calc(100vh - 80px);
		border-right: 1px solid rgba(128, 128, 128, 0.36);
		overflow: visible;

		.sticky {
			max-height: 100vh;
			min-height: calc(100vh - 80px);
			height: auto;
			overflow: auto;

			/* position: fixed; */
			@supports (position: sticky) or (position: -webkit-sticky) {
				position: sticky;
				position: -webkit-sticky;
				top: 0px;
			}
		}

		.active {
			background-color: #6868ac;
		}
	}
`;

interface YearListProps {
	yearList: YearProps[];
	selected: string;
}

const YearList: FC<YearListProps> = ({ yearList, selected }) => {
	const basepath = window.location.pathname;

	return (
		<YearListWrapper>
			{yearList.map(({ year, total }, key) => (
				<li key={key} className={year === selected ? 'active' : ''}>
					<Link href={{ pathname: basepath, query: { year } }}>
						{/* key 가 0이면 모든글이다. */}
						<a>
							<span>{key > 0 ? <>{year}년</> : <>{year}</>}</span>
							<span>{total}</span>
						</a>
					</Link>
				</li>
			))}
		</YearListWrapper>
	);
};

const YearListWrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	li {
		padding: 0.5rem;
		width: 100%;
		a {
			width: 100%;
			display: block;
			display: flex;
			justify-content: space-between;
		}
	}
`;

interface TagListProps {
	tagList: string[];
	selected: string;
}

const TagList: FC<TagListProps> = ({ tagList, selected }) => (
	<>
		{tagList.map((tag, key) => (
			<Tag key={key} query={{ tag }} selected={selected} tagname={tag} />
		))}
	</>
);

interface TitleTypoProps {
	title: string;
}

const TitleTypo: FC<TitleTypoProps> = ({ title }) => (
	<Typography
		variant="body2"
		noWrap
		component="p"
		mt={1}
		mb={1}
		sx={{
			// color: 'rgba(128, 128, 128, 0.36)',
			opacity: 0.5,
		}}
	>
		{title.toLocaleUpperCase()}
	</Typography>
);

export default ArchiveList;