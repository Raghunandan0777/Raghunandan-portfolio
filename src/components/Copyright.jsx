

export default function Copyright() {
    return (
        <span style={{
            fontSize: "0.8rem",
            paddingLeft: '24px',
            color: 'var(--clr-txt-sec)',
        }}>
            All rights reserved &copy; {new Date().getFullYear()}
        </span>
    )
}
