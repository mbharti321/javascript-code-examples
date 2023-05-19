import time

def fetch_data(callback):
    # Simulating an asynchronous operation
    time.sleep(2)
    data = "Some data"
    callback(data)

def process_data(data):
    current_time = time.time()
    print("\ncurrentTime1:", current_time)

    print("its Python, Everybody waits here.\nProcessed data:", data)

current_time = time.time()
print("currentTime1:", current_time)
fetch_data(process_data)

print("last: I have to wait for others~~~~~~~~~~~~")
