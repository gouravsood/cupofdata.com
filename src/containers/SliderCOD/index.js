import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { withPrefix} from 'gatsby-link'
import Draggable from 'react-draggable'

export default class SliderCODWrapper extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activeDrags: 0,
			deltaPosition: {
        x: 0, y: 0
      },
		}
	}
	onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  }
  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }
  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    console.log('-- x, y --', x, y);
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }
	render() {
		return (
			<div>
        <Container className="cod-service">
        	<h2 className="text-center section-text mb-5">After cupofdata</h2>
        	<Row>
        		<Col sm="3" className="text-center">
        			<div className="clearfix img-view">
        				<img src={withPrefix('/files/images/img-finger.svg')} width="45"/>
        			</div>
        			<div className="service-content py-4 text-center">
        				<h4 className="subtitle">Identify</h4>
        			</div>
        		</Col>
        		<Col sm="6" className="transform-view text-center">
							<div className="after" style={{width: this.state.deltaPosition.x}}>
								<div className="item-1 text-center">
			        		<div className="clearfix img-view">
			        			<img src={withPrefix('/files/images/img-expand.svg')} width="130"/>
			        		</div>
			        		<div className="service-content py-4 text-center">
			        			<h4 className="subtitle">Expand with quality score</h4>
			        			<p className="sub-content">(Maching & Deep Learning)</p>
			        		</div>
		        		</div>
		        		<div className="item-2 text-center">
			        		<div className="clearfix img-view">
			        			<img src={withPrefix('/files/images/img-integrate_engage.svg')} width="180" />
			        		</div>
			        		<div className="service-content py-4 text-center">
			        			<h4 className="subtitle">Integrate and engage</h4>
			        		</div>
		        		</div>
							</div>
							<div className="before"  style={{width: 540 - this.state.deltaPosition.x}}>
								<div className="item-1 text-center">
			        		<div className="clearfix img-view">
			        			<img src={withPrefix('/files/images/img-before-expand.svg')} width="130"/>
			        		</div>
			        		<div className="service-content py-4 text-center">
			        			<h4 className="subtitle">Expand</h4>
			        			<p className="sub-content">(Manual Contract Validation)</p>
			        		</div>
		        		</div>
		        		<div className="item-2 text-center">
			        		<div className="clearfix img-view">
			        			<img src={withPrefix('/files/images/img-before-engage.svg')} width="108" />
			        		</div>
			        		<div className="service-content py-4 text-center">
			        			<h4 className="subtitle">Engage with limited tools</h4>
			        		</div>
		        		</div>
							</div>
							<Draggable
				        axis="x"
				        handle=".spinner"
				        defaultPosition={{x: 0, y: 0}}
				        position={null}
				        bounds="parent"
				        grid={[1, 1]}
				        onStart={() => this.onStart}
				        onDrag={(e, ui) => this.handleDrag(e, ui)}
				        onStop={() => this.onStop}>
									<div className="spinner cursor-y" />				        	
				      </Draggable>
						</Col>
        		
        		<Col sm="3" className="col-sm-3 text-center">
	        		<div className="clearfix img-view">
	        			<img src={withPrefix('/files/images/img-advocate.svg')} width="61" />
	        		</div>
	        		<div className="service-content py-4 text-center">
	        			<h4 className="subtitle">Advocate</h4>
	        			<p className="sub-content">(Inbound Marketing Channels)</p>
	        		</div>
        		</Col>
        	</Row>
        </Container>
			</div>
		)
	}
}