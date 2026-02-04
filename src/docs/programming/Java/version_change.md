# Change JAVA version

I was having Java 25, but I need to switch to Java 17

## Check current versions

```bash
java -version
javac -version
```

**Output: Java 25**

## Update and Install Java 17

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

### verify it installed

```bash
ls /usr/lib/jvm
```

Output:
java-17-openjdk-amd64
java-25-openjdk-amd64

## Switch Java to 17

**For Java**

```bash
sudo update-alternatives --config java
```

**For Javac**

```bash
sudo update-alternatives --config javac
```

Output: Options to select the new Java version 

Select and follow on screen prompts

### verify

```bash
java -version
javac -version
```

Now it should be Java 17

## Optional cleanup

```bash
sudo apt remove openjdk-25-jdk openjdk-25-jre
sudo apt autoremove
```

## Quick final check

```bash
java -version && javac -version && echo $JAVA_HOME
```