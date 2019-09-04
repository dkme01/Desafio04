import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
	state = {
		posts: [
			{
				id: 1,
				author: {
					name: 'Bryan Alexandre',
					avatar: 'https://i.pravatar.cc/150'
				},
				date: '03/SET/2019',
				content:
					'Realizando o desafio de ReactJS da RocketSeat. Esse curso ta sendo show de bola',
				comments: [
					{
						id: 2,
						author: {
							name: 'Clóvis Juqueira',
							avatar: 'https://i.pravatar.cc/150'
						},
						date: '03/SET/2019',
						content: 'Show de bola'
					}
				]
			},
			{
				id: 3,
				author: {
					name: 'José Peróba',
					avatar: 'https://i.pravatar.cc/150'
				},
				date: '02/SET/2019',
				content:
					'Um macaco cor púrpura com um bambolê verde neôn comendo bala Fini e assoviando Sonata Arctica..... Agora tente não pensar nisso...',
				comments: [
					{
						id: 4,
						author: {
							name: 'Clóvis Juqueira',
							avatar: 'https://i.pravatar.cc/150'
						},
						date: '03/SET/2019',
						content: 'Oh shit :('
					},
					{
						id: 5,
						author: {
							name: 'Bryan Alexandre',
							avatar: 'https://i.pravatar.cc/150'
						},
						date: '03/SET/2019',
						content:
							'Experimenta adicionar isso em um cenário em chamas uheuheuehueh'
					}
				]
			},
			{
				id: 6,
				author: {
					name: 'Bryan Alexandre',
					avatar: 'https://i.pravatar.cc/150'
				},
				date: '03/SET/2019',
				content: 'Só quero um trampo ;-;'
			}
		]
	};

	render() {
		const { posts } = this.state;

		return (
			<div className="post-list">
				{posts.map(post => (
					<PostItem key={post.id} {...post} />
				))}
			</div>
		);
	}
}

export default PostList;
