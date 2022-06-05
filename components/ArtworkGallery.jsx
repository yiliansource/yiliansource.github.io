import { Global } from "@emotion/react";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

import ArtworkCherryBlossoms from "../public/img/artworks/cherry-blossoms.jpg";
import ArtworkCorridor from "../public/img/artworks/corridor.jpg";
import ArtworkDiningRoom from "../public/img/artworks/dining-room.jpg";
import ArtworkForestStoneGiants from "../public/img/artworks/forest-stone-giants.png";
import ArtworkTemple from "../public/img/artworks/temple.png";

const artworks = [ArtworkCherryBlossoms, ArtworkDiningRoom, ArtworkForestStoneGiants, ArtworkTemple, ArtworkCorridor];

export function ArtworkGallery({ gutter = 10 }) {
    return (
        <>
            <Global
                styles={{
                    ".artwork-gallery-grid": {
                        display: "flex",
                        marginLeft: -gutter,
                        width: "auto",

                        ".masonry-column": {
                            paddingLeft: gutter,
                            backgroundClip: "padding-box",

                            ">*": {
                                marginBottom: gutter,
                                borderRadius: 8,
                                overflow: "hidden",
                            },
                        },
                    },
                }}
            />
            <Masonry
                breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                className="artwork-gallery-grid"
                columnClassName="masonry-column"
            >
                {/* TODO: Add large preview and details. */}
                {artworks.map((src) => (
                    <GalleryPreview key={src.src} src={src} />
                ))}
            </Masonry>
        </>
    );
}

export function GalleryPreview({ src, title = "", onClick }) {
    return (
        <div>
            <Image
                src={src}
                quality={50}
                placeholder="blur"
                draggable={false}
                title={title}
                alt={title}
                layout="responsive"
                onClick={() => onClick?.()}
            />
        </div>
    );
}
