import React, {useCallback, useState} from 'react';
import {
  AppProvider,
  Page,
  ColorPicker,
  TextField,
  hsbToRgb,
  rgbString
} from "@shopify/polaris";
import '@shopify/polaris/dist/styles.css';
import './styles.css';

const ColorPickerApp = () => {
        const [userText, setUserText] = useState('');
        const inputValue = useCallback(
            (value) => setUserText(value)
        );
    
        const [color, setColor] = useState({
            hue: 300,
            brightness: 1,
            saturation: 0.7,
            alpha: 0.7,
          });

          const rgbaColor = rgbString(hsbToRgb(color));    
        
    return (
        <div>
            <AppProvider>

                <Page title="Your Quote">
                        <TextField type="string" placeholder="Quote must have a maximum of 100 Characters" maxLength={100} className="user-input" value={userText}  onChange={inputValue}/>
                        
                        <div
                        style={{
                            marginTop: "1.1rem",                    
                        }}
                        >
                            <ColorPicker onChange={setColor} color={color} allowAlpha allowOpacity/>
                            <span>{rgbaColor}</span>
                        </div>
                </Page>
            </AppProvider>


            {!userText ? ('') : (
                <AppProvider>
                <Page title="Result">
                    <div className="result">
                        <p 
                            style={{
                            color: rgbaColor,
                            }}
                        >{userText}
                        </p>
                    </div>
            </Page>
            </AppProvider>
            )}

            
        </div>
    )
}

export default ColorPickerApp;
