import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';

const DangerMessage = () => {
  return (
    <Fragment>
      <Seo title="Danger Message"/>

				<div className="page main-signin-wrapper bg-primary br-0-f">
					
					<Row className="signpages ext-center" >
						<Col md={7} className=" mx-auto">
							<Card className="alert-message">
								<Card.Body>
									<div className="text-center text-white">
										<svg className="alert-icons" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
											<path d="m491.38 157.66c-13.149-30.297-31.855-57.697-55.598-81.439-23.742-23.742-51.142-42.448-81.439-55.598-31.529-13.686-64.615-20.625-98.338-20.625s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598s-42.448 51.142-55.598 81.439c-13.686 31.529-20.625 64.615-20.625 98.338s6.939 66.809 20.625 98.338c13.15 30.297 31.856 57.697 55.598 81.439s51.142 42.448 81.439 55.598c31.529 13.686 64.615 20.625 98.338 20.625s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439c13.686-31.529 20.625-64.615 20.625-98.338s-6.939-66.809-20.625-98.338zm-235.38 334.34c-127.92 0-236-108.08-236-236s108.08-236 236-236 236 108.08 236 236-108.08 236-236 236z" />
											<path d="m451.98 173.8c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.687-42.473-35.179-67.73-46.05-26.248-11.297-53.903-17.025-82.196-17.025-38.462 0-78.555 13.134-115.94 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.265 5.85 13.863 2.794 34.1-22.66 70.365-34.638 104.88-34.638 104.62 0 193 88.383 193 193s-88.383 193-193 193-193-88.383-193-193c0-34.504 11.975-70.771 34.629-104.88 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.808-1.803-13.863 2.797-24.84 37.397-37.97 77.489-37.97 115.94 0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.686 42.473 35.179 67.729 46.049 26.249 11.298 53.904 17.026 82.197 17.026s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729 11.298-26.249 17.026-53.904 17.026-82.197s-5.728-55.948-17.025-82.196z" />
											<path d="m312.56 256 41.716-41.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.281 11.719l-41.719 41.719-41.719-41.719c-7.557-7.557-17.6-11.719-28.281-11.719s-20.724 4.162-28.278 11.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281l41.719 41.719-41.716 41.716c-7.559 7.553-11.722 17.597-11.722 28.284s4.163 20.731 11.719 28.281c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.281-11.719l41.719-41.719 41.719 41.719c7.557 7.557 17.601 11.719 28.281 11.719s20.724-4.162 28.278-11.716c7.559-7.553 11.722-17.597 11.722-28.284s-4.163-20.731-11.719-28.281l-41.719-41.719zm27.577 84.139c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.139-5.861l-48.79-48.79c-1.953-1.953-4.512-2.929-7.071-2.929s-5.119 0.976-7.071 2.929l-48.79 48.79c-3.78 3.779-8.801 5.861-14.139 5.861s-10.359-2.082-14.142-5.864c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139l48.79-48.79c3.905-3.905 3.905-10.237 0-14.142l-48.793-48.793c-3.777-3.775-5.858-8.795-5.858-14.136s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l48.79 48.79c3.905 3.905 10.237 3.905 14.143 0l48.79-48.791c3.779-3.778 8.8-5.86 14.138-5.86s10.359 2.082 14.142 5.864c3.777 3.775 5.858 8.795 5.858 14.136s-2.081 10.361-5.861 14.139l-48.79 48.791c-3.905 3.905-3.905 10.237 0 14.142l48.793 48.793c3.777 3.774 5.858 8.794 5.858 14.135s-2.081 10.361-5.861 14.139z" />
											<path d="m114 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z" />
										</svg>
										<h3 className="mt-4 mb-3">Message Danger</h3>
										<p className="tx-18 text-white-50">Oops!! You tried to access a page which is not available.</p>
										<Link href={`/components/dashboard/dashboard`} className="btn btn-danger">Back to Home</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>

				</div>

			{/* <!-- End Page --> */}
		</Fragment>
  )
}
DangerMessage.layout = "Authenticationlayout"

export default DangerMessage