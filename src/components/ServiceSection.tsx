'use client';
import React from 'react';

const ServiceSection = () => {
    return (
        <section className="services bg-gray-900 text-white py-16" id="services">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-teal-400 mb-6">Services</h2>
            </div>
            <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <div className="service-box bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <div className="service-info">
                        <h4 className="text-2xl font-semibold text-teal-400 mb-4">Full-Stack Web Development</h4>
                        <p className="text-gray-400">
                            I specialize in end-to-end development of modern web applications using the MERN stack, crafting custom solutions tailored to clients needs, whether it`s e-commerce platforms, content management systems (CMS), or social networking sites. Leveraging React.js for dynamic user interfaces, Node.js and Express.js for server logic, and MongoDB for flexible data storage, I ensure seamless functionality and scalability across all projects.
                        </p>
                    </div>
                </div>

                <div className="service-box bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <div className="service-info">
                        <h4 className="text-2xl font-semibold text-teal-400 mb-4">Mobile App Development</h4>
                        <p className="text-gray-400">
                            Specializing in mobile app development using React Native, I craft custom solutions tailored to clients needs, ensuring native-like performance and user experience across iOS and Android platforms. Leveraging the power of React Native, I develop feature-rich applications that seamlessly integrate with device capabilities.
                        </p>
                    </div>
                </div>

                <div className="service-box bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <div className="service-info">
                        <h4 className="text-2xl font-semibold text-teal-400 mb-4">API Development and Integration</h4>
                        <p className="text-gray-400">
                            With expertise in Node.js and Express.js, I create robust RESTful APIs to power backend services for web and mobile applications, seamlessly integrating third-party APIs to enhance functionality. By implementing secure communication and data validation mechanisms, I ensure seamless data exchange and integration.
                        </p>
                    </div>
                </div>

                <div className="service-box bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                    <div className="service-info">
                        <h4 className="text-2xl font-semibold text-teal-400 mb-4">Integration and Deployment (CI/CD)</h4>
                        <p className="text-gray-400">
                            I streamline the development, testing, and deployment processes for MERN stack applications by setting up automated CI/CD pipelines. By configuring build automation tools and deployment strategies, I minimize downtime and risk during deployments, monitoring pipeline metrics to optimize workflow efficiency and enhance development agility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
