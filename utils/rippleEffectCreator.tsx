export default function creteRippleEffect(
  e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLLinkElement>,
  element: HTMLSpanElement,
  className: string,
) {
  const btn = e.currentTarget;

  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;

  if (element) {
    element.style.width = element.style.height = `${diameter}px`;
    element.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
    element.style.top = `${e.clientY - btn.offsetTop - radius}px`;
    element.classList.add(className);
  }

  const ripple = btn.getElementsByClassName(className)[0];

  if (ripple) {
    ripple.remove();
  }

  if (element) {
    btn.appendChild(element);
  }
}
