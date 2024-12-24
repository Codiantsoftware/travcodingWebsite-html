import React, { useEffect, useRef } from "react";
import { Button as BsButton } from "react-bootstrap";
export function Button({type = "", label = "" , extraClass = "", showIcon = false, iconClass ="", iconExtraClass = "",iconPosition = "", ...props}) {
    const buttonRef = useRef(null);
    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
        button.addEventListener('click', createRipple);
        }

        return () => {
        if (button) {
            button.removeEventListener('click', createRipple);
        }
        };
    }, []);
    const createRipple = (e) => {
        const button = e.currentTarget;    
        // Clear existing ripples
        const existingRipple = button.querySelector('.ripple-overlay');
        if (existingRipple) {
          existingRipple.remove();
        }    
        const rippleDiv = document.createElement('span');
        rippleDiv.className = 'ripple-overlay';
        const buttonRect = button.getBoundingClientRect();
        const rippleY = e.clientY - buttonRect.top;
        const rippleX = e.clientX - buttonRect.left;    
        rippleDiv.style.top = `${rippleY - rippleDiv.offsetHeight / 2}px`;
        rippleDiv.style.left = `${rippleX - rippleDiv.offsetWidth / 2}px`;    
        button.appendChild(rippleDiv);    
        setTimeout(() => {
          rippleDiv.remove();
        }, 800);
    }; 
    return (
        <BsButton  ref={buttonRef} type={type} className={`ripple-effect ${extraClass}`} {...props}>
            {showIcon && iconPosition === "left" && (
                <em className={`icon-${iconClass} ${iconExtraClass}`} />
            )}
            {label}
            {showIcon && iconPosition === "right" && (
                <em className={`icon-${iconClass} ${iconExtraClass}`} />
            )}
        </BsButton>
    );
}