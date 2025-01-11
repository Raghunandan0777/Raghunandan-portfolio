import React, { useEffect, useRef } from 'react'

const RandomFloat = ({
    children,
    radius = 50,
    speed = 1000,
    angleStep = 20
}) => {
    const elementRef = useRef();

    useEffect(() => {
        // Initial random angle between 0-360 degrees
        let currentAngle = +(360 * Math.random()).toFixed();
        let currentPosition = { x: 0, y: 0 };

        // Calculate next position based on angle and distance
        const getNextPosition = (angle, distance) => ({
            x: +(Math.cos(angle * Math.PI / 180) * distance).toFixed(),
            y: +(Math.sin(angle * Math.PI / 180) * distance).toFixed()
        });

        const animationInterval = setInterval(() => {
            // Random angle change between -angleStep and +angleStep
            currentAngle += +(Math.random() * 2 * angleStep - angleStep).toFixed();
            let movement = getNextPosition(currentAngle, 6);

            // Keep element within bounds defined by radius
            while (
                Math.abs(currentPosition.x + movement.x) >= radius ||
                Math.abs(currentPosition.y + movement.y) >= radius
            ) {
                currentAngle += +(Math.random() * 2 * angleStep - angleStep).toFixed();
                movement = getNextPosition(currentAngle, 6);
            }

            currentPosition = {
                x: currentPosition.x + movement.x,
                y: currentPosition.y + movement.y
            };

            if (elementRef.current) {
                elementRef.current.style.transition = "transform 1s linear";
                elementRef.current.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
            }
        }, speed);

        return () => clearInterval(animationInterval);
    }, [radius, speed, angleStep]);

    return (
        <div ref={elementRef} style={{ position: "relative" }}>
            {children}
        </div>
    );
};


export default RandomFloat;