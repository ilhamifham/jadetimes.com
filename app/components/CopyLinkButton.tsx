"use client";

import useSwitch from "../hooks/useSwitch";
import useStopScroll from "../hooks/useStopScroll";
import CloseButton from "./CloseButton";

const CopyLinkButton = () => {
  const [isShare, handleShareOn, handleShareOff] = useSwitch();
  const [isShareModal, handleShareModalOn, handleShareModalOff] = useSwitch();
  useStopScroll(isShare);
  useStopScroll(isShareModal);
  return (
    <div className="relative flex">
      <button className="w-5 z-[1]" onClick={() => (isShare ? handleShareOff() : handleShareOn())}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </button>
      {isShare && (
        <>
          <button
            className="absolute shadow-lg py-3 md:py-2 px-8 bg-white flex flex-row gap-3 text-nowrap items-center border border-neutral-300 right-full top-full z-[41]"
            onClick={() => {
              handleShareModalOn();
              handleShareOff();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-5 mb-[1px]"
              style={{ transform: "rotate3d(0, 1, 0, 180deg)" }}
            >
              <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM7.8 10.386q.103 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z" />
            </svg>
            Share post
          </button>
          <div className="fixed top-0 bottom-0 left-0 right-0 z-40" onClick={handleShareOff}></div>
        </>
      )}
      {isShareModal && (
        <div className="bg-[#00000080] fixed top-0 bottom-0 left-0 right-0 p-4 flex items-center justify-center z-40">
          <div className="bg-white max-w-[600px] w-full text-center p-4 font-medium">Share Post</div>
          <div className="absolute top-0 left-0 right-0 p-4 max-w-[1376px] mx-auto">
            <div className="ml-auto flex items-center justify-center w-8 h-8 lg:h-[2.0625rem] bg-[#0b0b0b]">
              <CloseButton className="text-white w-[1.7rem]" onClick={handleShareModalOff} ariaLabel="share window pop out" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyLinkButton;
