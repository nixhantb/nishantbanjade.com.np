export const footerStyles = `

  body {
    margin: 0;
  }

  footer {
    bottom: 0;
  }

  footer div {
    background-color:#C7D0FF;
    margin: -5px 0 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  svg {
    width: 100%;
  }

  .topball {
    background: none;
    position: absolute;
    right: 200px;
    bottom: 250px;
    animation: ball 1s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 0.3s;
    cursor: pointer;
  }

  .drop {
    fill: transparent;
    animation: drop 5s ease infinite normal;
    stroke:#C7D0FF;
    stroke-width: 0.5;
    opacity: 0.6;
    transform: translateY(80%);
  }

  .drop1 {
    transform-origin: 20px 3px;
  }

  .drop2 {
    animation-delay: 3s;
    animation-duration: 3s;
    transform-origin: 25px 3px;
  }

  .drop3 {
    animation-delay: -2s;
    animation-duration: 3.4s;
    transform-origin: 16px 3px;
  }

  .wave {
    animation: wave 8s linear;
    animation-iteration-count: infinite;
    fill: #C7D0FF;
  }

  #wave2 {
    animation-duration: 10s;
    animation-direction: reverse;
    opacity: 0.6;
  }

  #wave3 {
    animation-duration: 13s;
    opacity: 0.3;
  }

  @keyframes drop {
    0% {
      transform: translateY(80%);
      opacity: 0.6;
    }
    80% {
      transform: translateY(80%);
      opacity: 0.6;
    }
    90% {
      transform: translateY(10%);
      opacity: 0.6;
    }
    100% {
      transform: translateY(0%) scale(1.5);
      stroke-width: 0.2;
      opacity: 0;
    }
  }

  @keyframes wave {
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes ball {
    to {
      transform: translateY(20%);
    }
  }
`;
