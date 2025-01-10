

export const HL = ({ variant = 1, children, ...props }) => {

    return (
        <span style={{
            color: `var(--h${variant})`
        }}>{children}</span>
    )
}