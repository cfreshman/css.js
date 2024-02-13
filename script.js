if (!window['css.js']) (_=>{
    window['css.js'] = Date.now()
    window.css = {
        mixin: {
            get relative() {return`;
            position: relative;`},
            get absolute() {return`;
            position: absolute;`},
        
            get left() {return`;
            text-align: left;`},
            get right() {return`;
            text-align: right;`},
        
            get wide() {return`;
            width: -webkit-fill-available;`},
            get tall() {return`;
            height: -webkit-fill-available;`},
            get full() {return`;
            margin: 0; height: 100%; width: 100%;`},
            get cover() {return`;
            ${css.mixin.full}
            position: absolute; top: 0; left: 0;`},
            get fill() {return`;
            ${css.mixin.full}
            position: absolute; top: 0; left: 0;`}, // TODO redefine as flex-grow
        
            get flex() {return`;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;`},
            get row() {return`;
            ${css.mixin.flex}
            flex-direction: row;`},
            get column() {return`;
            ${css.mixin.flex}
            flex-direction: column;`},
        
            get center() {return`;
            ${css.mixin.flex}
            align-items: center;
            text-align: center;`},
            get center_row() {return`;
            ${css.mixin.row}
            ${css.mixin.center}`},
            get center_column() {return`;
            ${css.mixin.column}
            ${css.mixin.center}`},
        
            get middle() {return`;
            ${css.mixin.center}
            justify-content: center;
            text-align: center;`},
            get middle_row() {return`;
            ${css.mixin.row}
            ${css.mixin.middle}`},
            get middle_column() {return`;
            ${css.mixin.column}
            ${css.mixin.middle}`},
        
            get inline() {return`;
            display: inline-flex;`},
            get gap() {return`;
            ${css.mixin.flex}
            gap: .25em;`},
            get wrap() {return`;
            ${css.mixin.flex}
            flex-wrap: wrap;`},
            get start() {return`;
            ${css.mixin.flex}
            justify-content: flex-start;`},
            get end() {return`;
            ${css.mixin.flex}
            justify-content: flex-end`},
            get grow() {return`;
            flex-grow: 1;`},
            get shrink() {return`;
            flex-shrink: 1;`},
            get row_reverse() {return`;
            flex-direction: row-reverse;`},
            get column_reverse() {return`;
            flex-direction: column-reverse;`},

            get pre() {return`;
            white-space: pre;`},
            get pre_wrap() {return`;
            white-space: pre-wrap;`}, get pre_warp() {return this.pre_wrap},
            get pre_line() {return`;
            white-space: pre-line;`},
        
            get monospace() {return`;
            font-family: 'Duospace', monospace;
            font-family: monospace;`},
            get uppercase() {return`;
            text-transform: uppercase;`},
            get lowercase() {return`;
            text-transform: lowercase;`},
            get capitalize() {return`;
            text-transform: capitalize;`},

            get solarize() {return`;
            --filter-b: 1.1;
            --filter-c: .775;
            --filter-s: .975;
            --filter-b: 1.2;
            --filter-c: .6;
            --filter-s: .95;
            --filter: brightness(var(--filter-b)) contrast(var(--filter-c)) saturate(var(--filter-s));
            --filter-invert: brightness(calc(1/var(--filter-b))) contrast(calc(1/var(--filter-c))) saturate(calc(1/var(--filter-s)));
            filter: var(--filter);`}
        },
        common: {
            get reset() {return`
            * {
                box-sizing: border-box;
            }`},
        
            get base() {return`
            ${css.common.reset}
            :root {
                --filter-b: 1;
                --filter-c: 1;
                --filter-s: 1;
                --filter: brightness(var(--filter-b)) contrast(var(--filter-c)) saturate(var(--filter-s));
                --filter-invert: brightness(calc(1/var(--filter-b))) contrast(calc(1/var(--filter-c))) saturate(calc(1/var(--filter-s)));
                filter: var(--filter);
            }
            ${[
                ['seven-segment-display', '', ['.ttf']],
                ['highway-gothic', '', ['.ttf']],
                [
                    'Duospace', 'ia-duospace/iAWriterDuospace-', 
                    ['Regular.woff2'],
                    ['Italic.woff2', { style:'italic' }],
                    ['Bold.woff2', { weight:'bold' }],
                    ['BoldItalic.woff2', { style:'italic', weight:'bold'}],
                ],
                [
                    'space-mono', 'space-mono/SpaceMono-', 
                    ['Regular.ttf'],
                    ['Italic.ttf', { style:'italic' }],
                    ['Bold.ttf', { weight:'bold' }],
                    ['BoldItalic.ttf', { style:'italic', weight:'bold'}],
                ],
                [
                    'space-grotesk', 'space-gothic/static/SpaceGrotesk-', 
                    ['Regular.ttf'],
                    ['Bold.ttf', { weight:'bold' }],
                    ['Light.ttf', { weight:'light' }],
                ],
                [
                    'Roboto Mono', 'roboto-mono/static/RobotoMono-', 
                    ['Regular.ttf'],
                    ['Italic.ttf', { style:'italic' }],
                    ['Bold.ttf', { weight:'bold' }],
                    ['BoldItalic.ttf', { style:'italic', weight:'bold' }],
                ],
                ['noto-emoji', '', ['.ttf']],
                // [
                //     'Roboto Slab', 'roboto-slab/static/RobotoSlab-', 
                //     ['Regular.ttf'],
                //     ['Italic.ttf', { style:'italic' }],
                //     ['Bold.ttf', { weight:'bold' }],
                //     ['BoldItalic.ttf', { style:'italic', weight:'bold'}],
                // ],
            ].flatMap(([name, prefix, ...variants]) => variants.map(([file, options={}]) => {
                const [non_ext, ..._ext] = file.split('.')
                const ext = _ext.join('.')
                const origin = 'https://freshman.dev' // ['file://', 'null'].includes(location.origin) ? 'https://freshman.dev' : window.server||(location.host ? location.origin : '.')||''
                const filename = `${options.dir || 'fonts/2/'}${prefix}${non_ext || name}.${ext}`
                const filepath = `${origin}/${filename}`
                console.debug('import', filepath)
                return  `@font-face {
                    font-family: '${name}';
                    ${options.weight ? `font-weight: ${options.weight};` : ''}
                    ${options.style ? `font-style: ${options.style};` : ''}
                    src: url('${filepath}') format('${{
                        'ttf': 'truetype'
                    }[ext] || ext}');
                }`
            })).join('\n')}

            html, body {
                ${css.mixin.full}
            }
            body {
                ${css.mixin.monospace}
            }
            iframe {
                filter: var(--filter-invert);
            }
            ${Object.keys(css.mixin).map(k => `.${k.replace(/_/g, '-')}{${css.mixin[k]}}`).join('')}
            .spacer {
                flex-grow: 1;
            }
            .description {
                font-size: .7em;
            }
            .row img {
                width: 0;
                flex-grow: 1;
            }
            `},
        },
        postprocess: (pairs, { flags='g' }={}) => pairs.map(([match, replace]) => [typeof match === 'string' ? new RegExp(match, flags) : match, replace])
    }
    document.head.append(window.css_base = (l => (l.innerHTML = css.common.base)&&l)(document.createElement('style')))
})()