const Splash = (props) => {
    return(

        <>
            <h1>TrailMix</h1>
            <LoginContainer 
                login={this.props.login}
                errors={this.props.errors}/>
            <SignupContainer 
                signup={this.props.signup}
                errors={this.props.errors}/>
            <DemoContainer 
                login={this.props.login}
                errors={this.props.errors}/>
        </>
    )
}