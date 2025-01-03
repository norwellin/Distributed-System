# 12-Factor App

1. **Codebase**  
   One codebase tracked in revision control, many deploys.
   
   **What We Did:**
   We created Docker images for both the front end and back end, so they can be deployed anywhere.


3. **Dependencies**  
   Explicitly declare and isolate dependencies.

4. **Config**  
   Store config in the environment.

5. **Backing services**  
   Treat backing services as attached resources.

6. **Build, release, run**  
   Strictly separate build and run stages.

7. **Processes**  
   Execute the app as one or more stateless processes.

8. **Port binding**  
   Export services via port binding.

9. **Concurrency**  
   Scale out via the process model.

10. **Disposability**  
   Maximize robustness with fast startup and graceful shutdown.

11. **Dev/prod parity**  
    Keep development, staging, and production as similar as possible.

12. **Logs**  
    Treat logs as event streams.

13. **Admin processes**  
    Run admin/management tasks as one-off processes.

####Reference
[Google]:(https://12factor.net/)
