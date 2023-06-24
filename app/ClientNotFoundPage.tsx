"use client"

import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
// https://react-svgr.com/docs/next/ 参照
import NotFoundIcon from "../public/not_found.svg"

/** 404ページ */
export default function ClientNotFoundPage() {
    const theme = useTheme()
    return (
        <>
            <Box textAlign='center'>
                <NotFoundIcon
                    className={'theme_color'}
                    height={200}
                    width={400}
                />
                <h1>404 - 見つかりませんでした</h1>
                <p>そこになければ無いですね。</p>
                <p>URLを確認してみてください。</p>
            </Box>
            {/* CSSの属性セレクターを利用してSVG要素の中のpath、circleの色を変えている。 */}
            <style jsx global>{`
                .theme_color path {
                    stroke: ${theme.palette.primary.main} !important;
                }
                .theme_color ellipse {
                    stroke: ${theme.palette.primary.main} !important;
                }
                .theme_color rect {
                    stroke: ${theme.palette.primary.main} !important;
                }
                .theme_color circle[style*="fill:none"] {
                    stroke: ${theme.palette.primary.main} !important;
                }
                .theme_color circle[style*="stroke:none"] {
                    fill: ${theme.palette.primary.main} !important;
                }
            `}</style>
        </>
    )
}