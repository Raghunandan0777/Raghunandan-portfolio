import React from 'react';
import './orbit.css';

const Orbiting = ({ children }) => {
    return (
        <div className="orbit-container">
            <div className="orbit">
                <div className="satellite">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        className="satellite-svg"
                    >
                        <path style={{ fill: 'none' }} d="M256 59.313 243.312 72h25.375z" />
                        <path style={{ fill: '#5c546a' }} d="M232 416v16h48v-16h-24z" />
                        <path
                            style={{ fill: '#888693' }}
                            d="M240 456h16v-24h-32c-8.82 0-16 7.176-16 16v48c0 8.824 7.18 16 16 16h8v-48a8 8 0 0 1 8-8"
                        />
                        <path
                            style={{ fill: '#b6b8be' }}
                            d="M256 456h16a8 8 0 0 1 8 8v48h8c8.82 0 16-7.176 16-16v-48c0-8.824-7.18-16-16-16h-32z"
                        />
                        <path
                            style={{ fill: '#5c546a' }}
                            d="M88 280h72v48H88zm0 112h48c13.234 0 24-10.766 24-24v-24H88zM0 280h72v48H0zm0 64v24c0 13.234 10.766 24 24 24h48v-48zm0-128h72v48H0zm88 0h72v48H88zm-16-64H24c-13.234 0-24 10.766-24 24v24h72zm88 48v-24c0-13.234-10.766-24-24-24H88v48z"
                        />
                        <path
                            style={{ fill: '#888693' }}
                            d="M160 264H88v-48h72v-16H88v-48H72v48H0v16h72v48H0v16h72v48H0v16h72v48h16v-48h72v-16H88v-48h88v-16z"
                        />
                        <path
                            style={{ fill: '#5c546a' }}
                            d="M440 280h72v48h-72zm-88 64v24c0 13.234 10.766 24 24 24h48v-48zm88 48h48c13.234 0 24-10.766 24-24v-24h-72zm-88-112h72v48h-72zm72-128h-48c-13.234 0-24 10.766-24 24v24h72zm16 64h72v48h-72zm48-64h-48v48h72v-24c0-13.234-10.766-24-24-24m-136 64h72v48h-72z"
                        />
                        <path
                            style={{ fill: '#888693' }}
                            d="M440 152h-16v48h-72v16h72v48h-88v16h88v48h-72v16h72v48h16v-48h72v-16h-72v-48h72v-16h-72v-48h72v-16h-72z"
                        />
                        <path style={{ fill: '#5c546a' }} d="M272 200v-17.209a106.5 106.5 0 0 1-32 0V200z" />
                        <path
                            style={{ fill: '#ffcf00' }}
                            d="M336 216c0-8.824-7.18-16-16-16h-64v40h16c13.255 0 24 10.745 24 24v152h16c13.234 0 24-10.766 24-24z"
                        />
                        <path
                            style={{ fill: '#ff9300' }}
                            d="M240 240h16v-40h-64c-8.82 0-16 7.176-16 16v176c0 13.234 10.766 24 24 24h16V264c0-13.255 10.745-24 24-24"
                        />
                    </svg>
                </div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default Orbiting;
