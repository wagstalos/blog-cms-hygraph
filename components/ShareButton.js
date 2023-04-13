import { RxShare1 } from "react-icons/rx";

const ShareButton = () => {
  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          tex: 'Seja bem-vindo ao mundo da programação front-end! Como desenvolvedor front-end.',
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
    }
  };

  return <button className='btn-share' onClick={shareLink}><RxShare1 size={24}/></button>;
};

export default ShareButton;
