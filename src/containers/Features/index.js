import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Global'
import Button from '../../components/Button'
import { withPrefix} from 'gatsby-link'
const Wrapper = styled.div`
	background: #f5f7fa;
	padding-top: 50px;
	height: 620px;
`
const Title = SectionTitle.extend`
	margin-bottom: 94px;
`
const FeatureContent = styled.p`
	font-size: 16px;
	line-height: 26px;
	max-width: 380px;
	font-family: Avenir;
	margin-bottom: 2rem;
	padding-left: 30px;
	text-indent: -7px;
`
const FeaturesView = () => (
	<Wrapper>
		<Title>Features</Title>
		<Container>
			<Row>
				<Col xs="6">
					<img src={withPrefix('/files/images/img-desktop.png')} />
				</Col>
				<Col xs="6">
					<FeatureContent><i className="fa fa-angle-right"/> Curate and verify contact list with on-demand Human intelligence</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Add contact quality scores with machine learning</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Trigger targeted actions using your existing Martech stack</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Measure and test</FeatureContent>
					<Button>Learn More</Button>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default FeaturesView