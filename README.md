# testGame

## setup

1. clone this repository
   ```bash
   $ git clone https://github.com/EndoHizumi/testGame.git
   ```

3. build webTaleKit.

```bash
$ git clone https://github.com/EndoHizumi/webTaleKit.git
$ cd webTaleKit 
$ npm install && npm run build
```

When you run the command, the file "webtalekit-0.1.0.tgz" should have been generated.

3. install to webTaleKit from testGame

```bash
$ npm install { webtalekit-0.1.0.tgz path }
```

setup complete!!

## how to run

1. execute command.

```bash
$ npm run play
```

When you run the command, the server will start at localhost:8080 and automatically open a browser window. (If you don't want the browser to open automatically, please run the command below instead.)

```bash
$ npm run dev
```

![2024-07-01-00-34-43.png](2024-07-01-00-34-43.png)
If this screen opens, congratulations - you've succeeded!
