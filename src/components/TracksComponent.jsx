import React from "react";
import {
  TRACK_DESCRIPTIONS,
  TRACK_ICON_MAP,
  tracksList,
} from "../services/Tracks";

function TracksComponent() {
  const tracks = tracksList;
  const tracksLogo = TRACK_ICON_MAP;
  const trackdesc = TRACK_DESCRIPTIONS;
  return (
    <section className="sm:px-8  p-2 sm:pt-10 pt-5 pb-10 flex w-full flex-col sm:gap-9 gap-4 items-center bg-gray-200">
      <div className="text-center flex items-center justify-center w-full">
        <h1 className="font-bold xl:text-4xl sm:text-2xl text-lg">
          Explore Our Research Tracks
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-8 w-full">
        {tracks.map((track) => {
          const Logo = tracksLogo[track];
          return (
            <div className="bg-white p-4 flex flex-col gap-3 rounded-2xl">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <Logo size={30} className="text-yellow-600" />
                </div>
                <div className="flex items-center">
                  <h1 className="font-bold sm:text-lg xs:text-base text-sm">
                    {track}
                  </h1>
                </div>
              </div>
              <div>
                <p className="sm:text-sm text-xs text-gray-600">
                  {trackdesc[track]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TracksComponent;
