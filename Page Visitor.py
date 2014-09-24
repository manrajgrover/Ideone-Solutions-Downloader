import webbrowser
import time

new=2
id_list=[] #populate the ids here
for id in id_list:
    webbrowser.open("http://ideone.com/plain/"+id,new=new,autoraise=True)
    time.sleep(5) #Time Delay to prevent IP blocking
