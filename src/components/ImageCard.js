import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10); /* how much height per image */

		this.setState({ spans }); /* spans: spans (same name, write once) */
	};

	render() {
		/* object destructure the image object so easier to access properties below*/
		const { description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
