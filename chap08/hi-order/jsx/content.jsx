const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component {
    render() {
        return (
            <div>
                <EnhancedButton/>
                <EnhancedLink/>
                <EnhancedLogo/>
            </div>
        )
    }
}