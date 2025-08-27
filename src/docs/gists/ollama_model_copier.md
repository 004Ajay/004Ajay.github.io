---
id: ollama_model_copier
title: Ollama Model Copier
sidebar_label: Ollama Model Copier
---

### Copy Ollama Model to another computer in the same network (Linux)

Downloading ollama model, that too size of 20-50GB in different computers connected in a network is an unwanted work. The easiest way is to serve the model in the most powerful machine and access it via API in other computers.

But sometimes we need these models in different computers (existing locally) for some reasons - if this is your case, then this gist is for you.

1. Get the path to manifest file of the ollama model you need to copy. It will be located at `"/home/appuser/.ollama/models/manifests/registry.ollama.ai/library/<model_name>/<model_size(ex: 4b, 20b)>"`

2. Copy this [python code](https://github.com/004Ajay/Personal-Works/blob/main/Helpfuls/ollama_models_copier.py) from [my GitHub](https://github.com/004Ajay) and put anywhere on your current system (system having the ollama model downloaded).

3. Run the code in sudo mode (for permissions) → `sudo python3 ollama_model_mover.py`

4. Enter the inputs the program asking, like Path from step 1, destination computer username, and destination computer IP address.

<details>
  <summary>See a sample output</summary>

```python
Please give path to the ollama manifest file(content inside it maybe in JSON format)
Sample path '/home/appuser/.ollama/models/manifests/registry.ollama.ai/library/qwen3/4b'
Enter path here: /home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss/20b

Ollama Manifest path given by you: '/home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss/20b'

I created some paths automatically.
Current system's ollama blobs path: '/home/appuser/.ollama/models/blobs'
Destination Manifest path: '/home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss/20b'
Destination Blobs path: '/home/appuser/.ollama/models/blobs'

Enter your destination computer username (Sample: appuser)
Enter username here: appuser

Enter your destination computer IP Address (Sample: 192.168.1.230)
Enter IP Address here: 192.168.1.230


#### Run the following commands from this computer ####


SSH command for making folders:

ssh appuser@192.168.1.230 'mkdir -p /home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss'


Manifest file scp command:

sudo scp /home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss/20b
appuser@192.168.1.230:/home/appuser/.ollama/models/manifests/registry.ollama.ai/library/gpt-oss/20b


Blob files scp command:

sudo scp
/home/appuser/.ollama/models/blobs/sha256-8d6fdda4b271e5b3a03151998ab665f896fa1d35acecf5848e3972f0254cea 
/home/appuser/.ollama/models/blobs/sha256-b112e727c6f18875636c56a779790a590d705aec9e1eb5a97d51fc2a778583
/home/appuser/.ollama/models/blobs/sha256-51468a0fd901ba858effc057a361f6dd33e4b3c99ead45f2673d2fd79a8943
/home/appuser/.ollama/models/blobs/sha256-f603567777e927149cbd4c0ec1314a90caba9400ad205ddc4ce47ed001c2d6
/home/appuser/.ollama/models/blobs/sha256-d8ba2f9a17b3bbdeb5690efaa409b3fcb0b56296a777c7ac78aa33bbddf182
appuser@192.168.1.230:/home/appuser/.ollama/models/blobs


## Info:
There are three commands, first one for making required folders, second for copying the manifest file and 
third for copying the blobs. Make sure you copy and enter both the commands.
If any auto-created path is wrong, correct in the final 'scp' commands.
It is better to make edits in the python code, for ex: addition of 'sudo' infront of all scp commands.
```

</details>

5. Run the 3 output commands (make any adjustments if needed) in the current computer itself and wait for the commands to copy the files. 

6. Now you can check the other computer's ollama (ollama list, ollama run) if everything was done correctly.