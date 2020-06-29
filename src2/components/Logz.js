import { authorize } from 'react-native-app-auth';
import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { Card, CardSection, Input,Button, Spinner } from './common';
import { Navigation } from 'react-native-navigation';
import DList from './DList';

// base config
/*const config = {
  issuer: 'https://dev-729079.okta.com/oauth2/default',
  clientId: '0oahl8wqxzsrZ1ypE4x6',
  redirectUrl: 'com.okta.dev-729079:/callback',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};*/

class Logz extends Component {

      SuccessLogin = () => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'DeptList',
            options: {
              topBar: {
                title: {
                  text: 'الأقسام                               ',
                  align: 'right',
                  fontSize: 35,
                },
                backButton: {
                  visible: false,
                  color: '#f8a11b'
                },
               /* rightButtons: [
                  {
                    visible: false,
                    text: 'Add'
                  }
              ]*/
              }
            }
          }
        })
      }

      GoToDeptList = () => {
          if ((this.state.email === 'lol') && (this.state.password === 'lol'))
          {alert('تم التسجيل');
            this.SuccessLogin(this);
            }
          else {alert('خطأ فى التسجيل')}
            
      }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" />
        }
        return(
            <Button onPress={() => this.GoToDeptList(this)}>
                تسجيل الدخول    
            </Button> 
        );

    }

    render(){
        return(
            <Card>
                <CardSection>
                  <View style={styles.headerContentStyle}>
                  <Input 
                        
                        placeholder="user@gmail.com"
                        label="اسم المستخدم"
                        onChangeText={email => this.setState({ email })}
                        value={this.props.email}

                    />
                  </View>
                    
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="كلمة السر"
                        label="كلمة السر"
                        onChangeText={password => this.setState({ password })}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 120,
  },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    textStyle: {
      justifyContent: 'flex-start',
      flexDirection: 'row-reverse',
    }
}

Logz.options = {
    topBar: {
      title: {
        text: 'تسجيل الدخول                               ',
        fontSize: 35,
      }
    }
  };
  /*
  Logz.options = {
    topBar: {
      title: {
        text: 'تسجيل الدخول                    ',
        align: 'right',
        fontSize: 23,

      }
    }
  };
*/
const DeptList = () => {
    return (
      <DList/>
    );
  }

export default Logz;

Navigation.registerComponent('Logz', () => Logz) ;
Navigation.registerComponent('DeptList', () => DeptList);
//Navigation.registerComponent('DeptList', () => DeptList) ;

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Logz'
              }
            }
          ]
        }
      }
    });
  });











/**
 import { authorize } from 'react-native-app-auth';
import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { Card, CardSection, Input,Button, Spinner } from './common';
import { Navigation } from 'react-native-navigation';
import DList from './DList';

class Logz extends Component {

  GoToDeptList = () => {
      
      alert('تم التسجيل');
      Navigation.push(this.props.componentId, {
        component: {
          name: 'DeptList',
          options: {
            topBar: {
              title: {
                text: 'الأقسام                               ',
                align: 'right',
                fontSize: 35,
              },
              backButton: {
                visible: false,
                color: '#f8a11b'
              },
            }
          }
        }
      })  
  }

renderButton() {
    if (this.props.loading) {
        return <Spinner size = "large" />
    }
    return(
        <Button onPress={() => this.GoToDeptList(this)}>
            تسجيل الدخول    
        </Button> 
    );

}

render(){
    return(
        <Card>
            <CardSection>
              <View style={styles.headerContentStyle}>
              <Input 
                    
                    placeholder="user@gmail.com"
                    label="اسم المستخدم"
                    onChangeText={email => this.setState({ email })}
                    value={this.props.email}

                />
              </View>
                
            </CardSection>

            <CardSection>
                <Input 
                    secureTextEntry
                    placeholder="كلمة السر"
                    label="كلمة السر"
                    onChangeText={password => this.setState({ password })}
                    value={this.props.password}
                />
            </CardSection>

            <Text style={styles.errorTextStyle}>
                {this.props.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
    );
}
}

const styles = {
headerContentStyle: {
flexDirection: 'column',
justifyContent: 'flex-start',
height: 120,
},
errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
},
textStyle: {
  justifyContent: 'flex-start',
  flexDirection: 'row-reverse',
}
}

Logz.options = {
topBar: {
  title: {
    text: 'تسجيل الدخول                               ',
    fontSize: 35,
  }
}
};

const DeptList = () => {
return (
  <DList/>
);
}

export default Logz;

Navigation.registerComponent('Logz', () => Logz) ;
Navigation.registerComponent('DeptList', () => DeptList);
//Navigation.registerComponent('DeptList', () => DeptList) ;

Navigation.events().registerAppLaunchedListener(async () => {
Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Logz'
          }
        }
      ]
    }
  }
});
});
 */

/**
 import { authorize } from 'react-native-app-auth';
import React, {Component} from 'react';
import { Text,Alert } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Navigation } from 'react-native-navigation';
import DeptList from './DeptList';

// base config
class Logz extends Component {

    GoToDeptList = (props) => {
        alert('lol');
        Navigation.push(props.ComponentID, {
          component: {
              name:'DeptList',
          }
        })  
    }

  renderButton() {
      if (this.props.loading) {
          return <Spinner size = "large" />
      }
      return(
          <Button onPress={() => this.GoToDeptList(this)}>
                      تسجيل الدخول
           </Button>
      );

  }

  render(){
      return(
          <Card>
              <CardSection>
                  <Input 
                      placeholder="user@gmail.com      "
                      label="اسم المستخدم"
                      onChangeText={email => this.setState({ email })}
                      value={this.props.email}

                  />
              </CardSection>

              <CardSection>
                  <Input 
                      secureTextEntry
                      placeholder="         كلمة السر"
                      label="كلمة السر"
                      onChangeText={password => this.setState({ password })}
                      value={this.props.password}
                  />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                  {this.props.error}
              </Text>

              <CardSection>
                  {this.renderButton()}
              </CardSection>
          </Card>
      );
  }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
}

Logz.options = {
  topBar: {
    title: {
      text: 'تسجيل الدخول'
    }
  },
  bottomTab: {
    text: 'تسجيل الدخول'
  }
};

DeptList.options = {
  topBar: {
    title: {
      text: 'اختيار القسم'
    }
  },
  bottomTab: {
    text: 'اختيار القسم'
  }
};

export default Logz;

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

Navigation.registerComponent('Logz', () => Logz) ;
Navigation.registerComponent('DeptList', () => DeptList) ;
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
      root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Logz'
                }
              },
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'DeptList'
                }
              }
            ]
          }
        }
      ]
    }
  }
  });
});
 */

/*
import { authorize } from 'react-native-app-auth';
import React, {Component} from 'react';
import { Text,Alert } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Navigation } from 'react-native-navigation';
// base config
const config = {
  issuer: 'https://dev-729079.okta.com/oauth2/default',
  clientId: '0oahl8wqxzsrZ1ypE4x6',
  redirectUrl: 'com.okta.dev-729079:/callback',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};

class Logz extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          password: '',
        };
      }

      GoToDeptList(){
          Navigation.push(props.ComponentID,
            component: {
                name:'DeptList',
                options: {
                    topBar: {
                        Title: {
                            text: 'DeptList'
                        }
                    }
                }
            }
            )
      }
    
    go = () => {
              const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               if (reg.test(this.state.email) === true){
                  alert('valid');
               }
               else{
                   alert();
               } 
    }

    onLogin() {
        const { email, password } = this.state;

        Alert.alert('Credentials', `${email} + ${password}`);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size = "large" />
        }
        return(
            <Button onPress={this.onLogin.bind(this)}>
                        تسجيل الدخول
             </Button>
        );

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com      "
                        label="اسم المستخدم"
                        onChangeText={email => this.setState({ email })}
                        value={this.props.email}

                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="         كلمة السر"
                        label="كلمة السر"
                        onChangeText={password => this.setState({ password })}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({auth}) => {
    const { email, password, error, loading} = auth;
    return { email, password, error, loading };
};

export default Logz;
*/