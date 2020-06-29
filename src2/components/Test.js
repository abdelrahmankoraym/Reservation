import React, { Component } from 'react';
import { Button, CardSection, Card2 } from './common';
import { Navigation } from 'react-native-navigation';
//import axios from 'axios';


class Test extends Component {
    GoToDeptList = (props) => {
        return(alert(props));
    }
    render() {
        return (
          
            <Card2>
                <CardSection>
                <Button onPress={() => this.GoToDeptList(0)}>المسالك البوليه</Button>
                </CardSection>
                <CardSection>
                <Button onPress={() => this.GoToDeptList(1)}>أنف وأذن وحنجرة</Button>
                </CardSection>
                <CardSection>
                <Button onPress={() => this.GoToDeptList(2)}>أسنان</Button>
                </CardSection>
                <CardSection>
                <Button onPress={() => this.GoToDeptList(3)}>الروماتيزم و الأمراض المناعية</Button>
                </CardSection>
                <CardSection>
                <Button onPress={() => this.GoToDeptList(4)}>العظام</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(5)}>النساء</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(6)}>الباطنة</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(7)}>الاعصاب</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(8)}>علاج طبيعي</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(9)}>جراحة</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(10)}>أطفال</Button>
                </CardSection>
                    <Button onPress={() => this.GoToDeptList(11)}>جلدية</Button>
                <CardSection>
                </CardSection>
                    <Button onPress={() => this.GoToDeptList(12)}>ممارس</Button>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(13)}>قلب</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(14)}>أمراض دم</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(15)}>أوعية دموية</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(16)}>كبد</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(17)}>كلي</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.GoToDeptList(18)}>رمد</Button>
                </CardSection>
                <CardSection></CardSection><CardSection>
                    <Button onPress={() => this.GoToDeptList(19)}>الصدر</Button>
                </CardSection>
            </Card2>
          
        );
      }
    }
    const styles = {
        container: {
          flex: 1,
          paddingTop: 40
        }}
    
    export default Test;
    
       
       Test.options = {
        topBar: {
          title: {
            text: 'الاقسام                               ',
            fontSize: 35,
          }
        }
      };
       Navigation.registerComponent('Test', () => Test);
       //Navigation.registerComponent('DeptList', () => DeptList) ;
       
       Navigation.events().registerAppLaunchedListener(async () => {
           Navigation.setRoot({
             root: {
               stack: {
                 children: [
                   {
                     component: {
                       name: 'Test'
                     }
                   }
                 ]
               }
             }
           });
         });