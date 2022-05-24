/** @jsxImportSource @emotion/react */

export const SectionHeading = ({ children }) => (
    <div
        css={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
        }}
    >
        <h2
            css={{
                fontSize: 40,
                fontWeight: 700,
            }}
        >
            {children}
        </h2>
        <div
            css={{
                flexGrow: 1,
                borderTop: "1px solid #192D3D",
            }}
        ></div>
    </div>
);
